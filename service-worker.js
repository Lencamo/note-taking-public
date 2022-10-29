/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4dadb19629174be4f82498a2c95eda9f"
  },
  {
    "url": "assets/css/0.styles.f2d5269c.css",
    "revision": "267321cd5a8b873e5f007de83f52c249"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.444706e3.js",
    "revision": "f9dd2ff6cb213b2858f15ca3643a6296"
  },
  {
    "url": "assets/js/100.fae86980.js",
    "revision": "cb8b7332a1e1cfa56ab67da864509d90"
  },
  {
    "url": "assets/js/101.0ce0c2af.js",
    "revision": "4da1cb2c39d24502fa7d7aa9e81be402"
  },
  {
    "url": "assets/js/102.67d3a329.js",
    "revision": "2a3c51f1dcea0308bc3b6fab88d16b11"
  },
  {
    "url": "assets/js/103.5882a60a.js",
    "revision": "7fdd5653a7213df1d60e2f5fec8df0c9"
  },
  {
    "url": "assets/js/104.65cc2e95.js",
    "revision": "2e750f7af55ccafdf002b021106e6568"
  },
  {
    "url": "assets/js/105.f6ca9867.js",
    "revision": "cd9c9593e606c5379623648ed2c97c03"
  },
  {
    "url": "assets/js/106.585e6e20.js",
    "revision": "634a8a1a99b99c4b6482f623fa57a372"
  },
  {
    "url": "assets/js/107.394b0595.js",
    "revision": "33c0ed7690ad6bc500466858e03d916c"
  },
  {
    "url": "assets/js/108.95cc031a.js",
    "revision": "c9921e662e6268475e8f5a8a98d36dd6"
  },
  {
    "url": "assets/js/109.95fcd923.js",
    "revision": "0f0296c5bb27fa59a7b4a2b457db894d"
  },
  {
    "url": "assets/js/11.8f737522.js",
    "revision": "ed5a872d4e0f78f21b48b053b37b678b"
  },
  {
    "url": "assets/js/110.0f15839b.js",
    "revision": "18a155703e5f68cf08174721f5622ac4"
  },
  {
    "url": "assets/js/111.b63425f2.js",
    "revision": "40e05ba36855051f4c96c814480e1b23"
  },
  {
    "url": "assets/js/112.5edbb737.js",
    "revision": "364bb4403c72307cff3f2f77852ef77d"
  },
  {
    "url": "assets/js/113.38c986c6.js",
    "revision": "01b4aae266c5f74780d751a113f37090"
  },
  {
    "url": "assets/js/114.edc12799.js",
    "revision": "eb08dc07d98434dc1f80ca8010707c31"
  },
  {
    "url": "assets/js/115.5f753f84.js",
    "revision": "421b7f2c6217d9f972b461a9f76e8ece"
  },
  {
    "url": "assets/js/116.930ab093.js",
    "revision": "5fdc46cb90e77af63806b6b304097d75"
  },
  {
    "url": "assets/js/117.3a558f2d.js",
    "revision": "3b87837c88054958f3831d2327e0b5e9"
  },
  {
    "url": "assets/js/118.2ef36004.js",
    "revision": "34cbbc35f2081b832064b219aa315bc1"
  },
  {
    "url": "assets/js/119.441e893c.js",
    "revision": "cb17a433e3e5155b411a4ef745294203"
  },
  {
    "url": "assets/js/12.3ff2360a.js",
    "revision": "383e0b5f9a48af57dce37bb76a1d547b"
  },
  {
    "url": "assets/js/120.aa36e042.js",
    "revision": "f01db93107cbea4dfc823eb781a936a5"
  },
  {
    "url": "assets/js/121.527d0454.js",
    "revision": "9949363ea5a44b1dba0b35e9a5469b42"
  },
  {
    "url": "assets/js/122.3fcb45b2.js",
    "revision": "54177570738f6ce57e54353fc888642e"
  },
  {
    "url": "assets/js/123.de48e0ed.js",
    "revision": "4bde564413434a918f2192bbf101ef56"
  },
  {
    "url": "assets/js/124.8b334b02.js",
    "revision": "747e83f958a0ad48754cf542d642f33f"
  },
  {
    "url": "assets/js/125.b4fdc04d.js",
    "revision": "bb7abc68068f1854460f4ec10a635918"
  },
  {
    "url": "assets/js/126.60ff5461.js",
    "revision": "7741b8e3620b28441add48e4a7a1f5a9"
  },
  {
    "url": "assets/js/127.836d2bb4.js",
    "revision": "578aef355748ecef9334f72a4410553d"
  },
  {
    "url": "assets/js/128.c74ae57e.js",
    "revision": "61b232d60b2afcb1a92473234991f289"
  },
  {
    "url": "assets/js/129.71804b62.js",
    "revision": "e439c089bc42d40c72707df638a6a378"
  },
  {
    "url": "assets/js/13.e5601ad5.js",
    "revision": "0c01a8de98fce6e99306a93e09f9355c"
  },
  {
    "url": "assets/js/130.c271732a.js",
    "revision": "622730134ab405838d663a39fd802786"
  },
  {
    "url": "assets/js/14.07a290c8.js",
    "revision": "e634c008395fb3414fba0e2c145cc491"
  },
  {
    "url": "assets/js/15.e27a8823.js",
    "revision": "d07f13e1fdeaaed0cf234e6ce24bb956"
  },
  {
    "url": "assets/js/16.c3327222.js",
    "revision": "c357375d5b4d94770347bc6d27704dae"
  },
  {
    "url": "assets/js/17.b8ec6946.js",
    "revision": "ecf72f62119f850be11833df456e51d1"
  },
  {
    "url": "assets/js/18.b324e5ef.js",
    "revision": "f850ee16610b1666a404fe2fd3d65858"
  },
  {
    "url": "assets/js/19.c3e90968.js",
    "revision": "cc46e9949a0bbd7d6881f54fc3136dc6"
  },
  {
    "url": "assets/js/2.e3d8c2a2.js",
    "revision": "6f36a319e61890e3f4bf2bb2493f3882"
  },
  {
    "url": "assets/js/20.1c549a63.js",
    "revision": "f37468fab545e573bc2d9ad1db68388e"
  },
  {
    "url": "assets/js/21.cea03eeb.js",
    "revision": "4184a7282001a55d3cc0aa380eccd825"
  },
  {
    "url": "assets/js/22.8b5bd0f4.js",
    "revision": "294f2fa31f3463ec4b4806b2fdf84186"
  },
  {
    "url": "assets/js/23.5f2d5d56.js",
    "revision": "92cac07c44afb57700d40b353534a4f5"
  },
  {
    "url": "assets/js/24.b547b45b.js",
    "revision": "539440e8cdfd6813d4ca59355a83e09d"
  },
  {
    "url": "assets/js/25.d4950ea6.js",
    "revision": "79392f69d6eee4f9123fb32b95d1b0b7"
  },
  {
    "url": "assets/js/26.bbe0b562.js",
    "revision": "aead7bdae5c549f5391a04de5ff856d9"
  },
  {
    "url": "assets/js/27.2d8a6d6b.js",
    "revision": "3133641a6e6c0eabfab057a8e3b0dfe3"
  },
  {
    "url": "assets/js/28.c22e7760.js",
    "revision": "c82c28b85eec838fd3ec22e1f12546c3"
  },
  {
    "url": "assets/js/29.62bba0fb.js",
    "revision": "ab7c52358c6ed2e21be6828e7b6c6a22"
  },
  {
    "url": "assets/js/3.d7085fad.js",
    "revision": "8ac1a8ac0715d10c5f58004c7cec4111"
  },
  {
    "url": "assets/js/30.2c08eb0c.js",
    "revision": "154063773d20e3ef3a235abfeb1d98fc"
  },
  {
    "url": "assets/js/31.a7ff9323.js",
    "revision": "1a502c10089d2eac3bf4324ae90796b3"
  },
  {
    "url": "assets/js/32.8352ab91.js",
    "revision": "ef38740bc5059041c2022d35ecef9418"
  },
  {
    "url": "assets/js/33.22dde34f.js",
    "revision": "ce95414bed649de263ade1a529a3b57e"
  },
  {
    "url": "assets/js/34.5b47b5a4.js",
    "revision": "9d76ee94de616d962be07278bc9ebeec"
  },
  {
    "url": "assets/js/35.bfc2f475.js",
    "revision": "fb1a6428851e7094b03cdc246733ba99"
  },
  {
    "url": "assets/js/36.f7c33029.js",
    "revision": "adeed8a345df6ba1f1e7e5467901a6f7"
  },
  {
    "url": "assets/js/37.f6a505fe.js",
    "revision": "921c23b01b4b3ca034a98cad256d3254"
  },
  {
    "url": "assets/js/38.5f909dc4.js",
    "revision": "5bcb3da82dbe31dd36f925166b45b8e1"
  },
  {
    "url": "assets/js/39.97d0217f.js",
    "revision": "79fe8b833f4c497cc6c86959eae6123a"
  },
  {
    "url": "assets/js/4.e12005fd.js",
    "revision": "23dd2bdbdc93cba35547b2030187ebe7"
  },
  {
    "url": "assets/js/40.7d0f561f.js",
    "revision": "68f525edc8e2bacc64a4f71339645913"
  },
  {
    "url": "assets/js/41.1901c59d.js",
    "revision": "062b731634ecfdc72e029134adec228a"
  },
  {
    "url": "assets/js/42.cf0bb7b8.js",
    "revision": "20f185562c46a1dcf40bf1bdd22b2fe7"
  },
  {
    "url": "assets/js/43.facd35f6.js",
    "revision": "583859e6890b2cf37b2ae966a81235a2"
  },
  {
    "url": "assets/js/44.9abfc388.js",
    "revision": "8a29cdfece66692b57fa45e858fe3175"
  },
  {
    "url": "assets/js/45.fd4fac88.js",
    "revision": "de5eb74a218f7e7a76f1d64f36f3555f"
  },
  {
    "url": "assets/js/46.3484c93e.js",
    "revision": "2c847ff9a62da0050e695e8f589d5d88"
  },
  {
    "url": "assets/js/47.846d687c.js",
    "revision": "6843537a687cf3bf56af9b5377610682"
  },
  {
    "url": "assets/js/48.3ef66f66.js",
    "revision": "5ec5dfa9805e123875c7dfda048fb134"
  },
  {
    "url": "assets/js/49.629e12c1.js",
    "revision": "33e2933893241b63d204e0bcad99d429"
  },
  {
    "url": "assets/js/5.128b89db.js",
    "revision": "f138f25e0c1a0dbc8bdce088ba0cac2f"
  },
  {
    "url": "assets/js/50.7ad1b541.js",
    "revision": "43485a730e99c85eabf4e2564659b1fc"
  },
  {
    "url": "assets/js/51.1c2de2cd.js",
    "revision": "0e82ebd506a2ea29eac6d75fdd9c58a3"
  },
  {
    "url": "assets/js/52.8b566faa.js",
    "revision": "db1abe9e737e58cb96be401ed514bbe5"
  },
  {
    "url": "assets/js/53.bd908b83.js",
    "revision": "4bd65c275b728d62e244577a4b557bc4"
  },
  {
    "url": "assets/js/54.0c0e482d.js",
    "revision": "a8de50cd3b6ab94fc78cdbfb74fd8355"
  },
  {
    "url": "assets/js/55.2fc8116d.js",
    "revision": "c194307cdc16f960f6cb04ab118d3f49"
  },
  {
    "url": "assets/js/56.60dc32db.js",
    "revision": "a94b381ff8df8d54bdc86f8f6d975785"
  },
  {
    "url": "assets/js/57.21cdc32c.js",
    "revision": "054f513d0e9fa320cb796326e664ef0d"
  },
  {
    "url": "assets/js/58.2698e2fe.js",
    "revision": "982f63b66028bbd5fc79d4e8c1d57285"
  },
  {
    "url": "assets/js/59.3129f1a8.js",
    "revision": "5b546855057db004ad353730038d9ccd"
  },
  {
    "url": "assets/js/6.9f45316a.js",
    "revision": "e5c768c3770992de1df102092d38d2bd"
  },
  {
    "url": "assets/js/60.f17cdb3f.js",
    "revision": "63b976efeaeb845601cf2e6697fa5503"
  },
  {
    "url": "assets/js/61.e86da438.js",
    "revision": "67b9225b7459e457d1cbad88dc07d764"
  },
  {
    "url": "assets/js/62.8183c871.js",
    "revision": "8c25059a5a6624ad5a11351174617ae4"
  },
  {
    "url": "assets/js/63.b115a28e.js",
    "revision": "30dab7bd1fcc0bb78c337a21cbcc5a13"
  },
  {
    "url": "assets/js/64.f36328dd.js",
    "revision": "bc24563408e11ba028b93ea0e5500c9b"
  },
  {
    "url": "assets/js/65.bbb4df8e.js",
    "revision": "04b577aceda2514d954e5ecfde3f3d7f"
  },
  {
    "url": "assets/js/66.51799367.js",
    "revision": "2f89ddd6e72f5221e673f656c27612a3"
  },
  {
    "url": "assets/js/67.95b414cb.js",
    "revision": "9e06d59bf9614af568787be168e8e4fb"
  },
  {
    "url": "assets/js/68.17c4b401.js",
    "revision": "e06478192aa60af933ba20764ff7f696"
  },
  {
    "url": "assets/js/69.9b21213a.js",
    "revision": "bb0973cb093d5bd55e256981d8886d27"
  },
  {
    "url": "assets/js/7.a4f6a133.js",
    "revision": "e1a731dd5ccc9899a83f0c7432270256"
  },
  {
    "url": "assets/js/70.4319c9a2.js",
    "revision": "67e97ad73031622bf77d9fa3d5e3e036"
  },
  {
    "url": "assets/js/71.323af411.js",
    "revision": "a5059b766aeecc47585266a0c35a2979"
  },
  {
    "url": "assets/js/72.cc773ebf.js",
    "revision": "04300d7301e3cb957fd32e7ca82cd843"
  },
  {
    "url": "assets/js/73.1e5418f6.js",
    "revision": "7a9776d353d896a79b6aa50387ba0647"
  },
  {
    "url": "assets/js/74.23511904.js",
    "revision": "86aa75b81fbf677a04908f0a5406eb91"
  },
  {
    "url": "assets/js/75.25e35b1e.js",
    "revision": "a01d4e5a0fac22cee401c347d380ea57"
  },
  {
    "url": "assets/js/76.abf03bdc.js",
    "revision": "93b181e39e43d8bec12ab46220966b68"
  },
  {
    "url": "assets/js/77.afe99a18.js",
    "revision": "07e52d121bdf03f2b79a0964655c4821"
  },
  {
    "url": "assets/js/78.eb681502.js",
    "revision": "acd17d34d42d57b5e51b7db1b302d7fd"
  },
  {
    "url": "assets/js/79.63880538.js",
    "revision": "8cffe079289d04a103f2c5fe160cc7c3"
  },
  {
    "url": "assets/js/8.d64315fe.js",
    "revision": "aa93d17be1c16f02d7068512591a44df"
  },
  {
    "url": "assets/js/80.6ab08acd.js",
    "revision": "6f6c318056a9a7c3908af9d077cf0f6c"
  },
  {
    "url": "assets/js/81.ff5a3752.js",
    "revision": "32d52bfd275ce2ce5d109d24027c8486"
  },
  {
    "url": "assets/js/82.8bfc68bf.js",
    "revision": "2baf03267f95d87a673cc62809f56a56"
  },
  {
    "url": "assets/js/83.7765a4cf.js",
    "revision": "18ca0a2a54695396e83f9a7c7052a18e"
  },
  {
    "url": "assets/js/84.c3bed9fe.js",
    "revision": "3e06f853150cddf23b07475f13629fc1"
  },
  {
    "url": "assets/js/85.3f533dbc.js",
    "revision": "a6d7cec73d3e838e8cf112aa935e852c"
  },
  {
    "url": "assets/js/86.c0add711.js",
    "revision": "d4785932de6edd33dac189fcdf04b46b"
  },
  {
    "url": "assets/js/87.d945e802.js",
    "revision": "38a84effd352cf6a94b90351ccc370ca"
  },
  {
    "url": "assets/js/88.11524fb8.js",
    "revision": "0f2a24d80063e2a258463a322c54cd46"
  },
  {
    "url": "assets/js/89.46e3d524.js",
    "revision": "3d5920645f22acedc1261c7edb119293"
  },
  {
    "url": "assets/js/9.994c9e9d.js",
    "revision": "bccc110f46d2b4dbc4d9642bcafc4aae"
  },
  {
    "url": "assets/js/90.1201735e.js",
    "revision": "0d2ecb4849b7d51b846d4e7b54ee52e9"
  },
  {
    "url": "assets/js/91.c06a9b10.js",
    "revision": "3d861d11a2782ae05bbdcb870adbf40d"
  },
  {
    "url": "assets/js/92.a08ae9b9.js",
    "revision": "117bfc132ec461a8648e65abe9ed7836"
  },
  {
    "url": "assets/js/93.71bff22f.js",
    "revision": "88e145643e2bd7421270c5ef46c029be"
  },
  {
    "url": "assets/js/94.62dd7ce7.js",
    "revision": "5119b072d6fa24f5fb6659cdd47d2696"
  },
  {
    "url": "assets/js/95.794c8621.js",
    "revision": "433b78647359709235fe3475a4a16ee6"
  },
  {
    "url": "assets/js/96.99fc0547.js",
    "revision": "8941d6cdc62afbc587950dc6ea15b9d8"
  },
  {
    "url": "assets/js/97.727f2aef.js",
    "revision": "b84e3841b030e2fcd52ba7527515c3d4"
  },
  {
    "url": "assets/js/98.acc27979.js",
    "revision": "54b158758f6996a388754bafe4af1370"
  },
  {
    "url": "assets/js/99.c76508c7.js",
    "revision": "437c6fb50b40d6c20a04e7def799ff77"
  },
  {
    "url": "assets/js/app.4d963c92.js",
    "revision": "3444ceb9db71d5ff4049db61d27a27cb"
  },
  {
    "url": "background.jpg",
    "revision": "502110b0ec7fb3d26cb0d94359a2403e"
  },
  {
    "url": "deersir.png",
    "revision": "8ec9ebee53be46a8f70495ea0850852e"
  },
  {
    "url": "guide/applets_Note/1、小程序入门/1.小程序简介.html",
    "revision": "710224ae6c3fabd5ab3a5cfd2a506a63"
  },
  {
    "url": "guide/applets_Note/1、小程序入门/2.基础组件.html",
    "revision": "8fb897895df0a06c1b55ea54bc0f71a1"
  },
  {
    "url": "guide/applets_Note/1、小程序入门/ESLint语法规范.html",
    "revision": "41e98ab937f8f1a572fbd92efbe3ba78"
  },
  {
    "url": "guide/applets_Note/1、小程序入门/REVIEW.html",
    "revision": "73e3438f4a3b5f7c710919e5c9f26d78"
  },
  {
    "url": "guide/applets_Note/2、模板语法-样式/1.WXML语法.html",
    "revision": "e4bf98a401ef11db9d523a7d1f9b5b45"
  },
  {
    "url": "guide/applets_Note/2、模板语法-样式/2.WXS脚本.html",
    "revision": "be7cccd025c9338c0f5d35f8940eb366"
  },
  {
    "url": "guide/applets_Note/2、模板语法-样式/REVIEW.html",
    "revision": "2d5ec1b5a3f06b0f5cc46c12e0b93019"
  },
  {
    "url": "guide/applets_Note/3、入口-配置文件/1.json配置文件.html",
    "revision": "921d92ace45b5b7df2ce6d67108dc26c"
  },
  {
    "url": "guide/applets_Note/3、入口-配置文件/2.生命周期.html",
    "revision": "bec4a9373c6766a53eb3e1783ed09a69"
  },
  {
    "url": "guide/applets_Note/3、入口-配置文件/3.网络请求.html",
    "revision": "01bb43929cd4a8f191d12b2ea0d25037"
  },
  {
    "url": "guide/applets_Note/4、小程序路由/1.页面导航.html",
    "revision": "d8f78a6b1ea5de649ac1b4b5af106ba4"
  },
  {
    "url": "guide/applets_Note/4、小程序路由/2.分包管理.html",
    "revision": "7058b5c2b75a6a16cb102d1af6a096e4"
  },
  {
    "url": "guide/applets_Note/4、小程序路由/REVIEW.html",
    "revision": "cdb4cca6549e59dd76c9adac73816fc0"
  },
  {
    "url": "guide/applets_Note/5、小程序组件/1.自定义组件.html",
    "revision": "1138cc267db7394bc53231a94331db10"
  },
  {
    "url": "guide/applets_Note/5、小程序组件/2.组件生命周期.html",
    "revision": "c28ffb35624316315c739d7cfc965fba"
  },
  {
    "url": "guide/applets_Note/5、小程序组件/3.组件通信.html",
    "revision": "d0490a0c3a16cbbb29e76b7a6c71e0fc"
  },
  {
    "url": "guide/applets_Note/5、小程序组件/4.数据共享与MobX.html",
    "revision": "286a844cb129e8ce73e6f98b49cd6dc1"
  },
  {
    "url": "guide/applets_Note/5、小程序组件/REVIEW.html",
    "revision": "16b15fa8f274545136fab81d361909ab"
  },
  {
    "url": "guide/applets_Note/index.html",
    "revision": "30df8bdc99afe58d1cb246453da67cae"
  },
  {
    "url": "guide/computer_Basics/1、基础必备/Less语法.html",
    "revision": "f7421270daa4d710d6844357cee83ea1"
  },
  {
    "url": "guide/computer_Basics/1、基础必备/Stylus语法.html",
    "revision": "316dcbdb58fc201ff1a4aa1c48e7d2eb"
  },
  {
    "url": "guide/computer_Basics/2、Sass学习/Sass入门.html",
    "revision": "db151a81a62fa6fcdb26a94ea778e11a"
  },
  {
    "url": "guide/computer_Basics/2、Sass学习/Sass拓展.html",
    "revision": "3f72ff68e5010562a8fb0c51a6f3c505"
  },
  {
    "url": "guide/computer_Basics/2、Sass学习/基础语法.html",
    "revision": "14c4895d1a8ee0646b78a038e69ed316"
  },
  {
    "url": "guide/computer_Basics/2、Sass学习/插值与函数.html",
    "revision": "4f31d9a2418b873e6485d1eb38b19c79"
  },
  {
    "url": "guide/computer_Basics/2、Sass学习/流程控制.html",
    "revision": "6a02290db2c529d1dce1fb6bdee604ce"
  },
  {
    "url": "guide/computer_Basics/3、Linux学习/Linux基础.html",
    "revision": "74d098621bf5e26d6774b9c5701003ef"
  },
  {
    "url": "guide/computer_Basics/3、Linux学习/Linux编程环境.html",
    "revision": "b9ce9fa951be95ef3fc2afa030c460cb"
  },
  {
    "url": "guide/computer_Basics/3、Linux学习/VMWare虚拟机.html",
    "revision": "8f4bf9cd36d40a56ce4cf7197b0bcff6"
  },
  {
    "url": "guide/computer_Basics/3、Linux学习/宝塔使用.html",
    "revision": "da70ff5bab82f10c384ae615f7c72722"
  },
  {
    "url": "guide/computer_Basics/3、Linux学习/项目部署.html",
    "revision": "2d5465c06bace45e21a82a06e6fb220a"
  },
  {
    "url": "guide/computer_Basics/git命令.html",
    "revision": "8de1564bd40f9ac5b02402a4415f7257"
  },
  {
    "url": "guide/computer_Basics/index.html",
    "revision": "a76bd1e233257a3d56d0bbb84b10fba7"
  },
  {
    "url": "guide/computer_Basics/正则表达式.html",
    "revision": "103ccfdde936cd776cfa12430757005a"
  },
  {
    "url": "guide/data-visual_Note/Array方法拓展.html",
    "revision": "8ab7784f118dbb95bc5f9a3881f356b8"
  },
  {
    "url": "guide/data-visual_Note/ECharts入门（上）.html",
    "revision": "cb384fc4b6cf9217423af32b9754a54f"
  },
  {
    "url": "guide/data-visual_Note/ECharts入门（下）.html",
    "revision": "56573d99838ab7c2e7349012a79a8120"
  },
  {
    "url": "guide/data-visual_Note/ECharts高级（上）.html",
    "revision": "5bb762e758daf3c045e692873740e32a"
  },
  {
    "url": "guide/data-visual_Note/ECharts高级（下）.html",
    "revision": "37ee52c928ddefb2cbca5d2d1ef9e6b6"
  },
  {
    "url": "guide/data-visual_Note/index.html",
    "revision": "33077dd1634a5667f7912f53a117dd75"
  },
  {
    "url": "guide/data-visual_Note/REVIEW.html",
    "revision": "836814c0e38091b1aa4ef47a8bc0a91a"
  },
  {
    "url": "guide/data-visual_Note/this指向.html",
    "revision": "52512d7b0123c52e86cf08a7cff367fa"
  },
  {
    "url": "guide/developing_Note/index.html",
    "revision": "41ad799256a40aedb2d97518db6e0e98"
  },
  {
    "url": "guide/developing_Note/project_Init/1、开发准备/ESLint使用.html",
    "revision": "d305ac50edade533790b7c7208871d43"
  },
  {
    "url": "guide/developing_Note/project_Init/1、开发准备/vue-cli.html",
    "revision": "f12ae154276210d6b4713b67973e010e"
  },
  {
    "url": "guide/developing_Note/project_Init/1、开发准备/前端适配方案.html",
    "revision": "62b141cb5acd67f0cbe3fc5787114c81"
  },
  {
    "url": "guide/developing_Note/project_Init/2、前后端分离/mockjs使用.html",
    "revision": "68026e11fbe603c33ace8ede4930f2ba"
  },
  {
    "url": "guide/developing_Note/project_Init/2、前后端分离/REVIEW.html",
    "revision": "04753064062afabfcf5acfaedcc676d4"
  },
  {
    "url": "guide/developing_Note/project_Init/2、前后端分离/接口开发规范.html",
    "revision": "a91daaef0e8a9a5e62e31b77cc5b0414"
  },
  {
    "url": "guide/developing_Note/project_Skills/promise使用/async-await.html",
    "revision": "a2036a78c38277bcf3d8c25e1c2d5d13"
  },
  {
    "url": "guide/developing_Note/project_Skills/promise使用/promise入门.html",
    "revision": "c8a566c9dd2e39ab9023ff09f81df1a1"
  },
  {
    "url": "guide/developing_Note/project_Skills/promise使用/promise对象方法.html",
    "revision": "1e7d8c28c77d7812b89acabe2386acb5"
  },
  {
    "url": "guide/developing_Note/project_Skills/promise使用/手写Promise.html",
    "revision": "c0bc480d8c3d94522b65bcb014bf916a"
  },
  {
    "url": "guide/developing_Note/project_Skills/权限管理与分类.html",
    "revision": "501b9d502429d3f36c2991f32c056c15"
  },
  {
    "url": "guide/node_Note/1、Node.js入门/1.Node基础与模块化.html",
    "revision": "2323d8db09bc37f6ca487130fece5e46"
  },
  {
    "url": "guide/node_Note/1、Node.js入门/2.包开发.html",
    "revision": "e85874143096ff66f1b4e85bc58d5066"
  },
  {
    "url": "guide/node_Note/1、Node.js入门/REVIEW.html",
    "revision": "b01440d44d83cebd1f548b30fd41732e"
  },
  {
    "url": "guide/node_Note/1、Node.js入门/正则表达式.html",
    "revision": "b5ea1c8ffe5b0ebe84f14030edc6a9cb"
  },
  {
    "url": "guide/node_Note/2、模块/1.内置API模块（上）.html",
    "revision": "a51aceea0087b290e0b3cc3333cd4ad4"
  },
  {
    "url": "guide/node_Note/2、模块/2.内置API模块（下）.html",
    "revision": "6f5e91f4946fdaf3e98992b19a61fe34"
  },
  {
    "url": "guide/node_Note/2、模块/3.第三方模块（包）.html",
    "revision": "4d6df682af99b781903a8018ee2d97b5"
  },
  {
    "url": "guide/node_Note/2、模块/ES6-promise.html",
    "revision": "f78a7a9158d861ec77d1df0f3dbb1354"
  },
  {
    "url": "guide/node_Note/2、模块/REVIEW.html",
    "revision": "6ac302b6c16cc3955f0075e2a69cf49a"
  },
  {
    "url": "guide/node_Note/2、模块/数据请求.html",
    "revision": "92f4fff4150e2a1046754c95fc86213e"
  },
  {
    "url": "guide/node_Note/2、模块/跨域.html",
    "revision": "e5ffe9ff4519540663b689e593e7f629"
  },
  {
    "url": "guide/node_Note/3、路由/1.Node路由（上）.html",
    "revision": "e68da2ad7ec4ef916996af78a5720337"
  },
  {
    "url": "guide/node_Note/3、路由/2.Node路由（下）.html",
    "revision": "aa8bcd363df39d144d89f1c45a4909e6"
  },
  {
    "url": "guide/node_Note/3、路由/API文档工具.html",
    "revision": "ff9dcd3806b39e752749ad533ac1cffe"
  },
  {
    "url": "guide/node_Note/3、路由/ES6-深浅拷贝.html",
    "revision": "73f1f10f2a4617da76b1d57a713f7da5"
  },
  {
    "url": "guide/node_Note/3、路由/REVIEW.html",
    "revision": "ceeee18910c39c81e0f84272da3a9063"
  },
  {
    "url": "guide/node_Note/4、Express学习/1.Express路由.html",
    "revision": "3fe8fd50dcc66a2e3e8af2bc59308e84"
  },
  {
    "url": "guide/node_Note/4、Express学习/2.MongoDB数据库.html",
    "revision": "4ff667c0c00a9787fb6b2a69f206af7a"
  },
  {
    "url": "guide/node_Note/4、Express学习/3.登录鉴权.html",
    "revision": "d4933c8cc7c8f9e0f5f2a25d7afd4ea3"
  },
  {
    "url": "guide/node_Note/4、Express学习/4.文件上传.html",
    "revision": "339e46191f5674e5e08e0d9842d007da"
  },
  {
    "url": "guide/node_Note/4、Express学习/MVC业务分层.html",
    "revision": "c1adf01104493919dbd054261738b59e"
  },
  {
    "url": "guide/node_Note/4、Express学习/web开发模式.html",
    "revision": "ff6008833d3acadc2cfb1c34cdfeef93"
  },
  {
    "url": "guide/node_Note/4、Express学习/接口开发规范.html",
    "revision": "8ce419c1b547f1ec653c4012a1abf1ba"
  },
  {
    "url": "guide/node_Note/5、Koa学习/1.koa学习（上）.html",
    "revision": "f6d778475d21bb734072777e4524cc50"
  },
  {
    "url": "guide/node_Note/5、Koa学习/2.koa学习（下）.html",
    "revision": "4cf31492fbaba4427c17cc69e01ffbf5"
  },
  {
    "url": "guide/node_Note/5、Koa学习/3.MySQL数据库.html",
    "revision": "472892c66d5b70f96ceef38c723808a7"
  },
  {
    "url": "guide/node_Note/6、WebSocket学习/websocket入门.html",
    "revision": "aa1baf5eb1dd5e7e6398f484d861e7d6"
  },
  {
    "url": "guide/node_Note/index.html",
    "revision": "33498011505c04406a09f0d1eece02f4"
  },
  {
    "url": "guide/uni-app_Note/1、uni-app入门/1.uni-app简介.html",
    "revision": "8a0e9ee268c4f7c9c723ea458c962aaa"
  },
  {
    "url": "guide/uni-app_Note/1、uni-app入门/2.配置文件.html",
    "revision": "6a6244168bf5ea4b964a9ca2525fe10f"
  },
  {
    "url": "guide/uni-app_Note/1、uni-app入门/3.生命周期.html",
    "revision": "f6330cf1e94f623ea71038f70cb54555"
  },
  {
    "url": "guide/uni-app_Note/1、uni-app入门/REVIEW.html",
    "revision": "ec9999209ed46d68f0ac3e0cabb09ec1"
  },
  {
    "url": "guide/uni-app_Note/index.html",
    "revision": "1e83c76848cb50be477e0e655d9c16fd"
  },
  {
    "url": "guide/vue_Note/1、前端工程化与webpack/1.webpack配置、打包和发布/REVIEW.html",
    "revision": "d0f0fcec2dcaca27ca47b2d8f941285e"
  },
  {
    "url": "guide/vue_Note/1、前端工程化与webpack/1.webpack配置、打包和发布/webpack.html",
    "revision": "c97290c6e7ebce2fe5e867492b227186"
  },
  {
    "url": "guide/vue_Note/1、前端工程化与webpack/2.vue-cli自动部署/eslintrc.js语法规范.html",
    "revision": "080bcd5626c4545bbeec1659e1525e07"
  },
  {
    "url": "guide/vue_Note/1、前端工程化与webpack/2.vue-cli自动部署/vue-cli.html",
    "revision": "1406f8cd102f1def1ed04f47f4766895"
  },
  {
    "url": "guide/vue_Note/1、前端工程化与webpack/REVIEW.html",
    "revision": "fd25d17a78b364571b71662f15143478"
  },
  {
    "url": "guide/vue_Note/2、vue指令与过滤器/REVIEW.html",
    "revision": "a5cdc2f51a0bf84a278c76719f41db21"
  },
  {
    "url": "guide/vue_Note/2、vue指令与过滤器/vue指令与过滤器.html",
    "revision": "195f59c8c5475228debceb55950b5d2e"
  },
  {
    "url": "guide/vue_Note/2、vue指令与过滤器/品牌案例/Bootstrap3.html",
    "revision": "22ef876b5b3551fa29cc19d29e6aad78"
  },
  {
    "url": "guide/vue_Note/2、vue指令与过滤器/品牌案例/Bootstrap4.html",
    "revision": "4d1171240b4e0c7c3823f9d2ff28b7e6"
  },
  {
    "url": "guide/vue_Note/2、vue指令与过滤器/品牌案例/REVIEW.html",
    "revision": "13060dbb2b08237ab10dc11bc3a07285"
  },
  {
    "url": "guide/vue_Note/2、vue指令与过滤器/品牌案例/前端布局设计.html",
    "revision": "80af2d5f5a61f3cecbcdea39fea5d7f5"
  },
  {
    "url": "guide/vue_Note/3、计算机属性与监听器/Axios（上）.html",
    "revision": "5f29f7b798e393d5e9f6fdbd76a9a79b"
  },
  {
    "url": "guide/vue_Note/3、计算机属性与监听器/Axios（下）.html",
    "revision": "4ee96aed0585a83ec89aa8b3413a8881"
  },
  {
    "url": "guide/vue_Note/3、计算机属性与监听器/计算机属性与监听器.html",
    "revision": "2703fc310db2d63b6557ea9c5dd1be4e"
  },
  {
    "url": "guide/vue_Note/4、vue组件 —— 基础/1.vue组件基础.html",
    "revision": "27f047e5bde1f9f81f4256ab8887a105"
  },
  {
    "url": "guide/vue_Note/4、vue组件 —— 基础/2.vue的生命周期.html",
    "revision": "6e628577f74e4f6724601961184a0069"
  },
  {
    "url": "guide/vue_Note/4、vue组件 —— 基础/3.数据共享与ref引用.html",
    "revision": "499d71e67326f1dc2c09931938b5086f"
  },
  {
    "url": "guide/vue_Note/4、vue组件 —— 基础/REVIEW.html",
    "revision": "cb809f88bc22a58ea61c6fbeeb8290e7"
  },
  {
    "url": "guide/vue_Note/5、vue组件 —— 高级/0.Prop和自定义事件.html",
    "revision": "8a352df4d754d8ff126f604eef1c3543"
  },
  {
    "url": "guide/vue_Note/5、vue组件 —— 高级/1.动态组件.html",
    "revision": "52b58a6c7c0593ec7601d54847791682"
  },
  {
    "url": "guide/vue_Note/5、vue组件 —— 高级/2.插槽.html",
    "revision": "4ef7fc79d79034387f3e5a44beabba9e"
  },
  {
    "url": "guide/vue_Note/5、vue组件 —— 高级/3.自定义指令.html",
    "revision": "f0aa4d85b9a119b172750dee41f1e0c8"
  },
  {
    "url": "guide/vue_Note/6、vue路由/REVIEW.html",
    "revision": "2bf1ac73bf7f47b6bd1ffe2ea44fc418"
  },
  {
    "url": "guide/vue_Note/6、vue路由/vue路由（上）.html",
    "revision": "c4bad29dd28530a2dcc8c8b92b683a9e"
  },
  {
    "url": "guide/vue_Note/6、vue路由/vue路由（下）.html",
    "revision": "e1789b6c986331e6efa6e37b5071f28c"
  },
  {
    "url": "guide/vue_Note/6、vue路由/vue路由进阶.html",
    "revision": "5df54262b17dba725ed5315f7e13f40b"
  },
  {
    "url": "guide/vue_Note/7、Vuex学习/Vuex.html",
    "revision": "273f3d8ced5b6b3fefa4edd188be30cc"
  },
  {
    "url": "guide/vue_Note/7、Vuex学习/Vuex模块化开发.html",
    "revision": "95ae48344ba31c124f32ab0a9c4faffb"
  },
  {
    "url": "guide/vue_Note/7、Vuex学习/Vuex进阶.html",
    "revision": "b77b7d26b0533b61b788f1b8cc83e27b"
  },
  {
    "url": "guide/vue_Note/8、Vue服务端渲染/SSR.html",
    "revision": "43da48ab60176c6528776e97a09ac58e"
  },
  {
    "url": "guide/vue_Note/index.html",
    "revision": "ff1db5cfeee47bf5fccd50d669177d53"
  },
  {
    "url": "head-150x150.png",
    "revision": "0c9a65cddc7f6e125120bf2f6703762d"
  },
  {
    "url": "head-70x70.png",
    "revision": "6db191a9dc4486092c1435ef3fce7fa5"
  },
  {
    "url": "head.jpg",
    "revision": "4edd7cd5fe8c80447a33f8015efd2d1f"
  },
  {
    "url": "homePic/applets_Note.png",
    "revision": "2366433f356d8d1fa2163222c4f5eed8"
  },
  {
    "url": "homePic/computer_Basics.png",
    "revision": "297f04b2543ce06ab8e2757e5d8b70e0"
  },
  {
    "url": "homePic/data-visual_Note.png",
    "revision": "d44f33bbf8f27df2e159bef6ca0939d6"
  },
  {
    "url": "homePic/node_Note.png",
    "revision": "b0b1cf812a263d869f97e89ba725e3f5"
  },
  {
    "url": "homePic/uni-app_Note.png",
    "revision": "07947b1ff62244d1b6442aafcdce32ed"
  },
  {
    "url": "homePic/vue_Note.png",
    "revision": "ecbc1ed50d88f11bde1937a84a54d653"
  },
  {
    "url": "homePic/vue3_Note.png",
    "revision": "9e2aa6b35c51e7c837429b0b5c8300fc"
  },
  {
    "url": "index.html",
    "revision": "a26822f92ece670869c7d0e06ef8846b"
  },
  {
    "url": "lencamo.png",
    "revision": "b90c1b69331c1b5e4447f33be2445dc0"
  },
  {
    "url": "toolroom/package_Useful/i18n.html",
    "revision": "d5e93ab11ae8f1735ad8bb89b0be5875"
  },
  {
    "url": "toolroom/package_Useful/index.html",
    "revision": "079f598525b222068d1b7503af3e5159"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
