/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.getElementById('qq_login').addEventListener('click',function(){
            var checkClientIsInstalled = 1;//默认值是 0,仅仅针对 iOS平台有效![]()
            YCQQ.ssoLogin(function(args){
                  alert("token is " + args.access_token);
                  alert("userid is " +args.userid);
                  alert("expires_time is "+ new Date(parseInt(args.expires_time)) + " TimeStamp is " +args.expires_time);
                  },function(failReason){
                     console.log(failReason);
            },checkClientIsInstalled);


        });


        document.getElementById('get_position').addEventListener('click',function(){

        var onSuccess = function(position) {
            alert('Latitude: '          + position.coords.latitude          + '\n' +
                  'Longitude: '         + position.coords.longitude         + '\n' +
                  'Altitude: '          + position.coords.altitude          + '\n' +
                  'Accuracy: '          + position.coords.accuracy          + '\n' +
                  'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
                  'Heading: '           + position.coords.heading           + '\n' +
                  'Speed: '             + position.coords.speed             + '\n' +
                  'Timestamp: '         + position.timestamp                + '\n');
        };

        // onError Callback receives a PositionError object
        //
        function onError(error) {
            alert('code: '    + error.code    + '\n' +
                  'message: ' + error.message + '\n');
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError);
      });



        document.getElementById('qq_share').addEventListener('click',function(){
        // var scope = "snsapi_userinfo",
        //     state = "_" + (+new Date());
        // Wechat.auth(scope, state, function (response) {
        //     // you may use response.code to get the access token.
        //     alert(JSON.stringify(response));
        // }, function (reason) {
        //     alert("Failed: " + reason);
        // });

             var args = {};
             args.url = "http://www.topjwd.com";
             args.title = "金维度";
             args.description = "金维度是中国北京的";
             var imgs =['http://www.topjwd.com/home/res/logo.png',
             'http://www.topjwd.com/home/res/logo.png',
             'http://www.topjwd.com/home/res/logo.png'];
              args.imageUrl = imgs;
              YCQQ.shareToQzone(function () {
                  alert("分享成功");
              }, function (failReason) {
                  alert(failReason);
              }, args);

        });


    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {


    },

};

app.initialize();
