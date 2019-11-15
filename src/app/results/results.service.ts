import { Injectable, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Results } from './results.model';
import ConfigData from './azure_search_config.json';


@Injectable({providedIn: 'root'})
export class ResultsService {

 $searchType = new EventEmitter();
 searchServiceName: string;
 adminKey: string;
 queryKey: string;
 indexName: string;
 apiVersion: string;

 constructor(private http: HttpClient) {
  this.searchServiceName = ConfigData.serviceName;
  this.adminKey = ConfigData.adminKey;
  // // The query key is used for read-only requests and so can be distributed with less risk of abuse.
  this.queryKey = ConfigData.queryKey;
  this.indexName = ConfigData.indexName;
  this.apiVersion = '2019-05-06';
 }

 getResults(searchTerm) {
    // return this.http.get<Results[]>('http://localhost:3000/api/results')
    // return this.http.get<Results[]>(`https://${this.searchServiceName}.search.windows.net/indexes/${this.indexName}/docs?api-version=${this.apiVersion}&search=${searchTerm}&searchMode=all`);
    var url = `https://${this.searchServiceName}.search.windows.net/indexes/${this.indexName}/docs?api-version=${this.apiVersion}&search=${searchTerm}&searchMode=all`;

    const headers = {
      'content-type' : 'application/json',
      'api-key' : ConfigData.adminKey
    };
  const init = bodyJson === null ?
      {
          method,
          headers
      }
      :
      {
          method,
          headers,
          body : JSON.stringify(bodyJson)
      };
  return fetch(url, init);

  }



 search(url, method, apiKey, bodyJson = null) {
    // Uncomment the following for request details:
    /*
    console.log(`\n${method} ${url}`);
    console.log(`\nKey ${apiKey}`);
    if (bodyJson !== null) {
        console.log(`\ncontent: ${JSON.stringify(bodyJson, null, 4)}`);
    }
    */
    const headers = {
        'content-type' : 'application/json',
        'api-key' : apiKey
    };
    const init = bodyJson === null ?
        {
            method,
            headers
        }
        :
        {
            method,
            headers,
            body : JSON.stringify(bodyJson)
        };
    return fetch(url, init);
  }

//   function getAzureConfiguration() {
//     const config = nconf.file({ file: 'azure_search_config.json' });
//     if (config.get('serviceName') === '[SEARCH_SERVICE_NAME') {
//         throw new Error("You have not set the values in your azure_search_config.json file.Change them to match your search service's values.");
//     }
//     return config;
// }


}
