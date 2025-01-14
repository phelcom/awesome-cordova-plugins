/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import {
  Plugin,
  Cordova,
  CordovaProperty,
  CordovaInstance,
  InstanceProperty,
  AwesomeCordovaNativePlugin,
} from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';

/**
 * @name Phelcom F T P
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { PhelcomFTP } from '@awesome-cordova-plugins/phelcom-ftp';
 *
 *
 * constructor(private phelcomFTP: PhelcomFTP) { }
 *
 * ...
 *
 *
 * this.phelcomFTP.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'PhelcomFTP',
  plugin: 'cordova-plugin-ftp', // npm package name, example: cordova-plugin-camera
  pluginRef: 'cordova.plugin.ftp', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/phelcom/cordova-plugin-ftp', // the github repository URL for the plugin
})
@Injectable()
export class PhelcomFTP extends AwesomeCordovaNativePlugin {
  /**
   * Connect to one ftp server.
   *
   * Just need to init the connection once. If success, you can do any ftp actions later.
   *
   * @param {string} hostname The ftp server url. Like ip without protocol prefix, e.g. "192.168.1.1".
   * @param {string} username The ftp login username. If it and `password` are all blank/undefined, the default username "anonymous" is used.
   * @param {string} password The ftp login password. If it and `username` are all blank/undefined, the default password "anonymous@" is used.
   * @returns {Promise<any>} The success callback. Notice: For iOS, if triggered, means `init` success, but NOT means the later action, e.g. `ls`... `download` will success!
   */
  @Cordova()
  connect(hostname: string, username: string, password: string): Promise<any> {
    return;
  }

  /**
   * List files (with info of `name`, `type`, `link`, `size`, `modifiedDate`) under one directory on the ftp server.
   * You can get one file's name using `fileList[x].name` (`x` is the location in array).
   *
   * Explain key:
   * - name: file name (utf-8).
   * - type: file type. number `0` means regular file, `1` means directory, `2` means symbolic link, `-1` means unknown type (maybe block dev, char dev...).
   * - link: if the file is a symbolic link, then this field store symbolic link information (utf-8), else it's a blank string.
   * - size: file size in bytes.
   * - modifiedDate: modified date of this file. date format is `yyyy-MM-dd HH:mm:ss zzz`, e.g "2015-12-01 20:45:00 GMT+8".
   *
   * @param {string} path The path on the ftp server. e.g. "/adf/123/".
   * @returns {Promise<any>} Returns a promise
   */
  @Cordova()
  ls(path: string): Promise<any> {
    return;
  }

  /**
   * Create one directory on the ftp server.
   *
   * @param {string} path The path on the ftp server. e.g. "/adf/123/".
   * @returns {Promise<any>} Returns a promise
   */
  @Cordova()
  mkdir(path: string): Promise<any> {
    return;
  }

  /**
   * Delete one directory on the ftp server.
   *
   * Tip: As many ftp server could not rm dir when it's not empty, so rm all files under the dir at first is recommended.
   *
   * @param {string} path The file (with full path) you want to delete. e.g. "/adf/123/newDir/myFile".
   * @returns {Promise<any>} Returns a promise
   */
  @Cordova()
  rmdir(path: string): Promise<any> {
    return;
  }

  /**
   * Delete one file on the ftp server.
   *
   * @param {string} file The file (with full path) you want to delete. e.g. "/adf/123/newDir/myFile".
   * @returns {Promise<any>} Returns a promise
   */
  @Cordova()
  rm(file: string): Promise<any> {
    return;
  }

  /**
   * Upload one local file to the ftp server.
   *
   * @param {string} localFile The file (with full path) you want to upload. e.g. "/local/path/to/localFile".
   * @param {string} remoteFile The file (with full path) you want to located on the ftp server. e.g. "/adf/123/newDir/remoteFile".
   * @returns {Observable<any>} Returns an observable.
   *                        It will be triggered many times according the file's size.
   *                        The arg `0`, `0.1xx`, `0.2xx` ... `1` means the upload percent. When it reach `1`, means success.
   */
  @Cordova({
    observable: true,
  })
  upload(localFile: string, remoteFile: string): Observable<any> {
    return;
  }

  /**
   * Download one remote file on the ftp server to local path.
   *
   * @param {string} localFile The file (with full path) you want to upload. e.g. "/local/path/to/localFile".
   * @param {string} remoteFile The file (with full path) you want to located on the ftp server. e.g. "/adf/123/newDir/remoteFile".
   * @returns {Observable<any>} Returns an observable.
   *                        It will be triggered many times according the file's size.
   *                        The arg `0`, `0.1xx`, `0.2xx` ... `1` means the upload percent. When it reach `1`, means success.
   */
  @Cordova({
    observable: true,
  })
  download(localFile: string, remoteFile: string): Observable<any> {
    return;
  }

  /**
   * Cancel all requests. Always success.
   *
   * @returns {Promise<any>} Returns a promise
   */
  @Cordova()
  cancel(): Promise<any> {
    return;
  }

  /**
   * Disconnect from ftp server.
   *
   * @returns {Promise<any>} Returns a promise
   */
  @Cordova()
  disconnect(): Promise<any> {
    return;
  }
}
