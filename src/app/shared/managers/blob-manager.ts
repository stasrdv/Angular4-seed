/**
 * This file is responsible for blobs object management
 */

import { Injectable } from '@angular/core'
import { BrowsersManager } from "./browser-manager";

@Injectable()
export class BlobManager {

    constructor(private browsersManager: BrowsersManager){}

    /**
     * Execute the proccess for the file download
     * @param fileData 
     * @param fileMimeType 
     * @param fileExtension 
     * @param fileName 
     */
    downloadFile(fileData: string, fileMimeType: string, fileExtension: string, fileName: string): void {

        if (this.browsersManager.isIEBrowser()) {
            let blob: MSBlobBuilder = this.createIEBlob(fileData, fileMimeType, fileExtension, fileName);
            this.downloadMSBlob(blob, fileMimeType, fileName, fileExtension);
        }
        else {
            let blob: Blob = this.createBlob(fileData, fileMimeType);
            let blobUrl: string = this.objectUrlCreater(blob);
            let element: HTMLAnchorElement = this.createDownloadElement(blobUrl, fileExtension, fileName);
            element.click();
            this.objectUrlRevoker(blobUrl);
        }
    }

    /**
     * Creating blob object
     * @param fileData 
     * @param fileMimeType 
     */
    createBlob(fileData: string, fileMimeType: string): Blob {
        try {
            let byteCharacters: string = atob(fileData);
            let byteNumbers: Array<number> = new Array(byteCharacters.length);

            for (var i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
            }

            let byteArray: Uint8Array = new Uint8Array(byteNumbers);

            let blob: Blob = new Blob([byteArray], {
                type: fileMimeType
            });

            return blob;

        } catch (ex) {
            console.error(ex)
        }
    }

    /**
     * Creating IE Blob
     * @param fileData 
     * @param fileMimeType 
     * @param fileExtension 
     * @param fileName 
     */
    createIEBlob(fileData: string, fileMimeType: string, fileExtension: string, fileName: string): MSBlobBuilder {
        try {
            let byteCharacters: string = atob(fileData);
            let byteNumbers: Array<number> = new Array(byteCharacters.length);

            for (var i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
            }

            let byteArray: Uint8Array = new Uint8Array(byteNumbers);

            var blobObject = new MSBlobBuilder();
            blobObject.append(byteArray);
            return blobObject;

        } catch (ex) {
            console.error(ex)
        }
    }

    /**
     * Download MS Blobs
     * @param blob IE blob object
     * @param fileMimeType 
     * @param fileName 
     * @param fileExtension 
     */
    downloadMSBlob(blob: MSBlobBuilder, fileMimeType: string, fileName: string, fileExtension: string) {
        window.navigator.msSaveBlob(blob.getBlob(fileMimeType), fileName + fileExtension);
    }

    /**
     * Creates the download element
     * @param blobUrl 
     * @param fileExtension 
     * @param fileName 
     */
    createDownloadElement(blobUrl: string, fileExtension: string, fileName: string): any {

        let a: any = document.createElement('a');

        if (this.browsersManager.isSafariMobile()) {
            window.location.href = a.href;
        } else {
            window.document.body.appendChild(a);
            a.click();
        };

        a.style = 'display: none';
        a.href = blobUrl;
        a.download = fileName + '.' + fileExtension;
        document.getElementById('downloadOnly').appendChild(a);
        return a;
    }

    /**
     * Create the url form the blob
     * @param blob blob object
     */
    objectUrlCreater(blob: Blob): string {
        return window.URL.createObjectURL(blob);
    }

    /**
     * Revoke the url
     * @param blobUrl 
     */
    objectUrlRevoker(blobUrl: string): void {
        window.URL.revokeObjectURL(blobUrl);
    }
}