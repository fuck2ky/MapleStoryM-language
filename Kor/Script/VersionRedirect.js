//  https://github.com/sazs34/TaskConfig
let isQuantumultX=undefined===this.$task?false:true;let isSurge=undefined===this.$httpClient?false:true;var $task=isQuantumultX?this.$task:{};var $httpClient=isSurge?this.$httpClient:{};var $prefs=isQuantumultX?this.$prefs:{};var $persistentStore=isSurge?this.$persistentStore:{};var $notify=isQuantumultX?this.$notify:{};var $notification=isSurge?this.$notification:{};if(isQuantumultX){var errorInfo={error:''};$httpClient={get:(url,cb)=>{var urlObj;if(typeof(url)=='string'){urlObj={url:url}}else{urlObj=url}$task.fetch(urlObj).then(response=>{cb(undefined,response,response.body)},reason=>{errorInfo.error=reason.error;cb(errorInfo,response,'')})},post:(url,cb)=>{var urlObj;if(typeof(url)=='string'){urlObj={url:url}}else{urlObj=url}url.method='POST';$task.fetch(urlObj).then(response=>{cb(undefined,response,response.body)},reason=>{errorInfo.error=reason.error;cb(errorInfo,response,'')})}}}if(isSurge){$task={fetch:url=>{return new Promise((resolve,reject)=>{if(url.method=='POST'){$httpClient.post(url,(error,response,data)=>{if(response){response.body=data;resolve(response,{error:error})}else{resolve(null,{error:error})}})}else{$httpClient.get(url,(error,response,data)=>{if(response){response.body=data;resolve(response,{error:error})}else{resolve(null,{error:error})}})}})}}}if(isQuantumultX){$persistentStore={read:key=>{return $prefs.valueForKey(key)},write:(val,key)=>{return $prefs.setValueForKey(val,key)}}}if(isSurge){$prefs={valueForKey:key=>{return $persistentStore.read(key)},setValueForKey:(val,key)=>{return $persistentStore.write(val,key)}}}if(isQuantumultX){$notification={post:(title,subTitle,detail)=>{$notify(title,subTitle,detail)}}}if(isSurge){$notify=function(title,subTitle,detail){$notification.post(title,subTitle,detail)}}
if($request.url.indexOf('_1/') > -1){
  var mStatus = isQuantumultX?"HTTP/1.1 302 Found":302;
  var mHeaders = {"Location": $request.url.replace('_1/','/')};
  var mResponse = {
      status:mStatus,
      headers:mHeaders
  }
  $done(mResponse);
}else{
  $done({});
}