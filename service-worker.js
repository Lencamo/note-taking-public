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
    "revision": "ed18abf53d83cae65938220ebd4d8b03"
  },
  {
    "url": "assets/css/0.styles.5691e7a2.css",
    "revision": "0e0f8553a1ee292b4ffbef3620ead8b0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6f596f14.js",
    "revision": "3c43005d6cd895a6d51164357f75c276"
  },
  {
    "url": "assets/js/100.cf0db030.js",
    "revision": "45b6109876aa7aa4169d60374c624679"
  },
  {
    "url": "assets/js/101.1fcde4fc.js",
    "revision": "e9b475453940a209f666a4c309de3fef"
  },
  {
    "url": "assets/js/102.1918b7f2.js",
    "revision": "1bd66e6427a475a90c1d62233ffe9b02"
  },
  {
    "url": "assets/js/103.881ec13a.js",
    "revision": "9353550cccac869b199d930fe6b8ff6d"
  },
  {
    "url": "assets/js/104.8d7dbdf2.js",
    "revision": "76f33fd0f69d465329232fc3a08bfd1b"
  },
  {
    "url": "assets/js/105.782514e3.js",
    "revision": "eece0cdc8f3eef8c12d7286c18adebc8"
  },
  {
    "url": "assets/js/106.c1b631fe.js",
    "revision": "e3a9793c2d5076c26cc0b6773dd613c2"
  },
  {
    "url": "assets/js/107.53f51f67.js",
    "revision": "2b86513eeb1b52051e490d87a50a11dd"
  },
  {
    "url": "assets/js/108.b0f65189.js",
    "revision": "4f8711bba287614b972ebb8c650be5f5"
  },
  {
    "url": "assets/js/109.e0312fe0.js",
    "revision": "5ed4ebce1950c197e4246290654efbfa"
  },
  {
    "url": "assets/js/11.6b96b5fa.js",
    "revision": "daebfc3e519633b90051ac3378763253"
  },
  {
    "url": "assets/js/110.4577f8c4.js",
    "revision": "d83d6658919b634a131567e1d7f2e218"
  },
  {
    "url": "assets/js/111.6918c43c.js",
    "revision": "4fde2ef7e6e0b99112c895b5dce1aa67"
  },
  {
    "url": "assets/js/112.75ad9b48.js",
    "revision": "183803646ff241a95fa80040ad33604a"
  },
  {
    "url": "assets/js/113.eb0a1ef9.js",
    "revision": "00d76681f5363eadcab92ebae737e9aa"
  },
  {
    "url": "assets/js/12.0a1cf922.js",
    "revision": "332f97e3bda56890a63724759c103fc5"
  },
  {
    "url": "assets/js/13.32c0784b.js",
    "revision": "2e24a8a0ad2ccd8ad7c8154a9e66d07b"
  },
  {
    "url": "assets/js/14.29363e72.js",
    "revision": "9cfdf925be1a3d111ca3e2de69014fed"
  },
  {
    "url": "assets/js/15.b258d6d7.js",
    "revision": "58a2ec27ae02b39244c24da543a39f18"
  },
  {
    "url": "assets/js/16.20704e82.js",
    "revision": "11dc50867df7ee676089abb6a4214bbf"
  },
  {
    "url": "assets/js/17.007562ce.js",
    "revision": "900ad45928eb204365e585195c5569f5"
  },
  {
    "url": "assets/js/18.dd04b11a.js",
    "revision": "c91a5a13201fe3146245dec68652c0af"
  },
  {
    "url": "assets/js/19.6db871e7.js",
    "revision": "8b0a263159b08ceca87c92334d44e830"
  },
  {
    "url": "assets/js/2.2042cf93.js",
    "revision": "f3a5dcd3ff47f43388c8fd0f2602730c"
  },
  {
    "url": "assets/js/20.10e9fede.js",
    "revision": "5c082b776c7208b8459b3ecc2b203d9a"
  },
  {
    "url": "assets/js/21.fb1c3d3c.js",
    "revision": "24cee62e9417dfe7109afaf2a3842ab4"
  },
  {
    "url": "assets/js/22.f4c20edc.js",
    "revision": "fb8d519b763b17325e1ef3ddc0fb13a2"
  },
  {
    "url": "assets/js/23.e643daed.js",
    "revision": "4eea680620bc67390856f328ef5aaef2"
  },
  {
    "url": "assets/js/24.7f4cea11.js",
    "revision": "bf85d61a2379d2a2e4ef183f9a956c9d"
  },
  {
    "url": "assets/js/25.9505588c.js",
    "revision": "3b71440186e72747631d04ef140b5c9c"
  },
  {
    "url": "assets/js/26.92658197.js",
    "revision": "e1be69f4effc9cdc60f51480008dee9e"
  },
  {
    "url": "assets/js/27.afaba10d.js",
    "revision": "6b6b242493e7aa58ea9f4be13095012f"
  },
  {
    "url": "assets/js/28.a7c1bfa4.js",
    "revision": "6358cc058105b7849e4752ef52c5f2d8"
  },
  {
    "url": "assets/js/29.46fb4199.js",
    "revision": "92f9cdff8686f3eab6ad265ad3facd90"
  },
  {
    "url": "assets/js/3.5836c3a9.js",
    "revision": "0dd9569efdd51c3664549fc8c1764e03"
  },
  {
    "url": "assets/js/30.33a51fc4.js",
    "revision": "a6c75ae648ef4e3b820ebf7f3cb33928"
  },
  {
    "url": "assets/js/31.e6446c6b.js",
    "revision": "a2f9016f8e76efcad241844d7c0b9232"
  },
  {
    "url": "assets/js/32.b56061b2.js",
    "revision": "789b70aa96b3c08748c28cd85947ed24"
  },
  {
    "url": "assets/js/33.138a598f.js",
    "revision": "374ed4156c098bd4cf16610ea98990de"
  },
  {
    "url": "assets/js/34.d9248012.js",
    "revision": "a948b560be7b570a51109bb815f3d064"
  },
  {
    "url": "assets/js/35.3a4edc70.js",
    "revision": "c11bcf702f9b9c009da9733f24dcf826"
  },
  {
    "url": "assets/js/36.ca4acaf0.js",
    "revision": "bb60e4e194260ce483518c4b821d7557"
  },
  {
    "url": "assets/js/37.bbfc57ed.js",
    "revision": "b6eedea89537666244d722a93a8e9efd"
  },
  {
    "url": "assets/js/38.ac114bbf.js",
    "revision": "aab23a04202d49d32ff7d5ddf27303aa"
  },
  {
    "url": "assets/js/39.dbbab1dd.js",
    "revision": "0436eba62398a915986ac513e0ca4ad8"
  },
  {
    "url": "assets/js/4.8f4e350d.js",
    "revision": "9484320ec78be7bc8d9511a705b905d6"
  },
  {
    "url": "assets/js/40.336faa07.js",
    "revision": "f6d7d4434709b8871acf17b0d0b44ce2"
  },
  {
    "url": "assets/js/41.370d0d3f.js",
    "revision": "b8ae05be65136711b9a212104ff2fa74"
  },
  {
    "url": "assets/js/42.4c14822d.js",
    "revision": "ed51a2eba5e33e9e15a45adc44de4140"
  },
  {
    "url": "assets/js/43.e6598ac3.js",
    "revision": "1f4e80d0448572d25298223a99474a24"
  },
  {
    "url": "assets/js/44.4a7c6af6.js",
    "revision": "c4e2b59f4196e4c62039b7e43a463aaa"
  },
  {
    "url": "assets/js/45.d93da128.js",
    "revision": "9c0bf550dc07a1b9e6d2be682f6224a5"
  },
  {
    "url": "assets/js/46.1d0fd26d.js",
    "revision": "32259afb4f3c654dc4e8a2b1848d3cc2"
  },
  {
    "url": "assets/js/47.3d8fc955.js",
    "revision": "a6a034e7c8bdc21a1a184805e9d17998"
  },
  {
    "url": "assets/js/48.03eb607e.js",
    "revision": "d86f71f0922a870194059134cdc00874"
  },
  {
    "url": "assets/js/49.70bec0cc.js",
    "revision": "c16fb21ac21743ebce735e9994bf7e00"
  },
  {
    "url": "assets/js/5.96a29b81.js",
    "revision": "927872f0b60a68fda579029fde6240ca"
  },
  {
    "url": "assets/js/50.983859c9.js",
    "revision": "16690976b45794f9374d003083552270"
  },
  {
    "url": "assets/js/51.263e5e2f.js",
    "revision": "c37a036012a36ae08f4bccdc91cb2a0f"
  },
  {
    "url": "assets/js/52.e31d467d.js",
    "revision": "e0dba87e8625908555c4e943cf7c8321"
  },
  {
    "url": "assets/js/53.b3404f2c.js",
    "revision": "e8a679f4c7490ceee73efb340c24166f"
  },
  {
    "url": "assets/js/54.54498b2e.js",
    "revision": "cb66475c26a1d959531bfcf3629349ff"
  },
  {
    "url": "assets/js/55.26ab9707.js",
    "revision": "1467992b157f7fe6d6c7595454ac2e63"
  },
  {
    "url": "assets/js/56.692c996a.js",
    "revision": "af3850bd142ed5d8d643913af35953aa"
  },
  {
    "url": "assets/js/57.7ebcf9c6.js",
    "revision": "742b78e198faa23b220496fe351ee43b"
  },
  {
    "url": "assets/js/58.678ef81f.js",
    "revision": "d20e7bdcbfa68d99f13b6627a686adfe"
  },
  {
    "url": "assets/js/59.69e2b798.js",
    "revision": "5017abe69e98e121396a101c44aa9083"
  },
  {
    "url": "assets/js/6.1c4ae514.js",
    "revision": "ed4fee712a870f9f505d56f317dfdcd8"
  },
  {
    "url": "assets/js/60.62f40d6d.js",
    "revision": "39a5a8aad8b45bb69f145f67c128a7da"
  },
  {
    "url": "assets/js/61.e96090b6.js",
    "revision": "2edb1fb318ed5e0f53be84f3e968bacc"
  },
  {
    "url": "assets/js/62.c65bbf5c.js",
    "revision": "147cad33972f0f6f70f0aaebe8eaaa81"
  },
  {
    "url": "assets/js/63.6b170893.js",
    "revision": "97fcf1376fb408e9985bd7b0db1c8886"
  },
  {
    "url": "assets/js/64.e521238b.js",
    "revision": "1c5656f20ad8234375e678133b1cfa93"
  },
  {
    "url": "assets/js/65.5c0cbd00.js",
    "revision": "31e1e043758d760e743ea26294efbe38"
  },
  {
    "url": "assets/js/66.73e795da.js",
    "revision": "c0473fcea92455923d9542b60fd67bdc"
  },
  {
    "url": "assets/js/67.0a7568c0.js",
    "revision": "0212f7b769cead6fb0caf020233a35d7"
  },
  {
    "url": "assets/js/68.be905f44.js",
    "revision": "45744fa37b96d33d782a32c2f7018ea9"
  },
  {
    "url": "assets/js/69.3a41c299.js",
    "revision": "d27cb8a8ffa46992e23167176c13d5a7"
  },
  {
    "url": "assets/js/7.d714ea2e.js",
    "revision": "b66ab132a9386d4e892b08765496d2c4"
  },
  {
    "url": "assets/js/70.4678f0d4.js",
    "revision": "69187580e20fa84a9360983f5b2c6b52"
  },
  {
    "url": "assets/js/71.4f4b1a63.js",
    "revision": "cad12eaa86cdacb3b3864820dd746de4"
  },
  {
    "url": "assets/js/72.2932a02a.js",
    "revision": "a984065eaadef565c97b6cfdebd371b6"
  },
  {
    "url": "assets/js/73.e61df112.js",
    "revision": "0faa3e9cb9e1e3c05d7b0e37b083ece1"
  },
  {
    "url": "assets/js/74.b4094609.js",
    "revision": "981ba9df0372dd93a34eabe97e5e68d3"
  },
  {
    "url": "assets/js/75.f3896c9c.js",
    "revision": "c8d83cbce5f8d79a690595740ed370c3"
  },
  {
    "url": "assets/js/76.84026755.js",
    "revision": "92a91755c4c068b979dc82f96c92e31d"
  },
  {
    "url": "assets/js/77.52ddaedb.js",
    "revision": "e3f0165f227f976fa28643dba3cc1a6c"
  },
  {
    "url": "assets/js/78.8cf9e607.js",
    "revision": "34ec10f670f6748b276dd5f7ffa3e9d6"
  },
  {
    "url": "assets/js/79.a5361416.js",
    "revision": "d4c71509b852c0d7430249ccdfa34958"
  },
  {
    "url": "assets/js/8.507fd804.js",
    "revision": "6da0dd809f235092bcd084f75d76c6af"
  },
  {
    "url": "assets/js/80.e8593e52.js",
    "revision": "2e7ff37b043e9667e96703708de8e9ac"
  },
  {
    "url": "assets/js/81.84f1fba9.js",
    "revision": "729d0ec2c425993841e9aad7e4662b7c"
  },
  {
    "url": "assets/js/82.73f25827.js",
    "revision": "05585c0a0ebbcf67e2e013dadb548bb2"
  },
  {
    "url": "assets/js/83.1ebc5c1c.js",
    "revision": "f739a4001ab415c3977596a35b658703"
  },
  {
    "url": "assets/js/84.d83c2460.js",
    "revision": "ef470ad32016843812cdbf7cc307f1e9"
  },
  {
    "url": "assets/js/85.c8e8ea84.js",
    "revision": "574a64a49289bdb9ef03cdd09d4f961b"
  },
  {
    "url": "assets/js/86.41a4558e.js",
    "revision": "d38b333b076a638c782c93e8d5cb65a5"
  },
  {
    "url": "assets/js/87.a8e89f5e.js",
    "revision": "74b3a873d1e42276e9875653d9b49738"
  },
  {
    "url": "assets/js/88.db7f2972.js",
    "revision": "0d8434547da7ac079a1a3c432db861fb"
  },
  {
    "url": "assets/js/89.a8fe23d0.js",
    "revision": "f6315359c35185ede2e58e0767c2c601"
  },
  {
    "url": "assets/js/9.48fbfa53.js",
    "revision": "64ad7492dc4c583d2f7b40841c7bd725"
  },
  {
    "url": "assets/js/90.ffb4b942.js",
    "revision": "b984c2b82605b28e115e9922b1aac16b"
  },
  {
    "url": "assets/js/91.dae1bc24.js",
    "revision": "a3b1bc94c5fd48d658f46f33ee2bb09d"
  },
  {
    "url": "assets/js/92.a49efa1e.js",
    "revision": "5d89630af047f998ae41ec08525b545d"
  },
  {
    "url": "assets/js/93.dd66e9a6.js",
    "revision": "009926b05a8c3148bfd9cec234521674"
  },
  {
    "url": "assets/js/94.15679786.js",
    "revision": "5551a9bbe52c1923842636ec73f49185"
  },
  {
    "url": "assets/js/95.36f92afb.js",
    "revision": "b2c50ff78105a94cbd748024101f7633"
  },
  {
    "url": "assets/js/96.eb26f633.js",
    "revision": "544c12e975d200564cfc80519cf30a62"
  },
  {
    "url": "assets/js/97.7f0dad69.js",
    "revision": "8ba7931ac68d54f0da3dfa1cc909d112"
  },
  {
    "url": "assets/js/98.6e2fd2a2.js",
    "revision": "513cf02d619b4294ef5f14bf1cc566c2"
  },
  {
    "url": "assets/js/99.78e7f808.js",
    "revision": "e43412ba6c846895b7a49d56ffbc386d"
  },
  {
    "url": "assets/js/app.930a31d4.js",
    "revision": "44946b5d34e6905b16d16591328f798a"
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
    "revision": "c620d275d7312e15d858346c5686253c"
  },
  {
    "url": "guide/applets_Note/1、小程序入门/2.基础组件.html",
    "revision": "b2d8eb1f9cba0af5a2475005ed06a37e"
  },
  {
    "url": "guide/applets_Note/1、小程序入门/ESLint语法规范.html",
    "revision": "da2074f0617b72cabe7cfc2cd8bc5045"
  },
  {
    "url": "guide/applets_Note/1、小程序入门/REVIEW.html",
    "revision": "d847016a8987a0303f018deb223f0e21"
  },
  {
    "url": "guide/applets_Note/2、模板语法-样式/1.WXML语法.html",
    "revision": "bb284c5c13915305bceebd7dd2004b3d"
  },
  {
    "url": "guide/applets_Note/2、模板语法-样式/2.WXS脚本.html",
    "revision": "f2e978046ac2a7f9ab0c97c28a22437d"
  },
  {
    "url": "guide/applets_Note/2、模板语法-样式/REVIEW.html",
    "revision": "9d02d62528068a0b9c7c7f2b1f8d5649"
  },
  {
    "url": "guide/applets_Note/3、入口-配置文件/1.json配置文件.html",
    "revision": "191a1542c4613ce74dcb8044129ae885"
  },
  {
    "url": "guide/applets_Note/3、入口-配置文件/2.生命周期.html",
    "revision": "f47d2befe3e31e22cc83bbcf7a912a87"
  },
  {
    "url": "guide/applets_Note/3、入口-配置文件/3.网络请求.html",
    "revision": "bf4154d65c1153ed220560ba11a3936e"
  },
  {
    "url": "guide/applets_Note/4、小程序路由/1.页面导航.html",
    "revision": "d361ab58d82825894b505616d2249ea3"
  },
  {
    "url": "guide/applets_Note/4、小程序路由/2.分包管理.html",
    "revision": "60548add8f0d6bbc22fe692bfe103c5d"
  },
  {
    "url": "guide/applets_Note/4、小程序路由/REVIEW.html",
    "revision": "6d866cc34bd453bf4fba53ad1f6a1576"
  },
  {
    "url": "guide/applets_Note/5、小程序组件/1.自定义组件.html",
    "revision": "2dc5a8e60aa90a5acfb0f00ba69272ed"
  },
  {
    "url": "guide/applets_Note/5、小程序组件/2.组件生命周期.html",
    "revision": "34893ab8558982298fde513783e6e3b1"
  },
  {
    "url": "guide/applets_Note/5、小程序组件/3.组件通信.html",
    "revision": "a06df3139735e3b4c0049bf964c6d064"
  },
  {
    "url": "guide/applets_Note/5、小程序组件/4.数据共享与MobX.html",
    "revision": "04143e8169182e6d012bbdb69c1efade"
  },
  {
    "url": "guide/applets_Note/5、小程序组件/REVIEW.html",
    "revision": "1361bd1a7413b878e21ec48080d060e7"
  },
  {
    "url": "guide/applets_Note/index.html",
    "revision": "b475bf8fa6ecd4d155ecfd137bf17ae3"
  },
  {
    "url": "guide/computer_Basics/1、基础必备/git命令.html",
    "revision": "75d436c21a8e3b7b12997b39306c3e83"
  },
  {
    "url": "guide/computer_Basics/1、基础必备/Linux基础.html",
    "revision": "cdb338947856b3e7658e69b547d205d6"
  },
  {
    "url": "guide/computer_Basics/1、基础必备/正则表达式.html",
    "revision": "895c2885ecd6e01a7cab81e58e177e63"
  },
  {
    "url": "guide/computer_Basics/2、CSS预处理器/Less语法.html",
    "revision": "33077f73b69de4be1d9b42f034b419fb"
  },
  {
    "url": "guide/computer_Basics/2、CSS预处理器/Scss语法.html",
    "revision": "198e9647bd28e9ad80006260c682ae31"
  },
  {
    "url": "guide/computer_Basics/2、CSS预处理器/Stylus语法.html",
    "revision": "80d3cd633a3b3ab8ece4964d596cf038"
  },
  {
    "url": "guide/computer_Basics/index.html",
    "revision": "c4ff123fd053d77dbf456df3d2da0f05"
  },
  {
    "url": "guide/data-visual_Note/Array方法拓展.html",
    "revision": "7981a51c8713789b49b54a0f71b3aa27"
  },
  {
    "url": "guide/data-visual_Note/ECharts入门（上）.html",
    "revision": "49e0af2a4f8cada00cf71f109a3dc3f3"
  },
  {
    "url": "guide/data-visual_Note/ECharts入门（下）.html",
    "revision": "b479ad5da5d3882edffbf8403435df57"
  },
  {
    "url": "guide/data-visual_Note/ECharts高级（上）.html",
    "revision": "503727bb5f06734e1f420d79c44d1a9d"
  },
  {
    "url": "guide/data-visual_Note/ECharts高级（下）.html",
    "revision": "f8cd49fdc24fec14d936855b780cd3c1"
  },
  {
    "url": "guide/data-visual_Note/index.html",
    "revision": "dc998ae4ba93311799f7aecbbf89fa3d"
  },
  {
    "url": "guide/data-visual_Note/REVIEW.html",
    "revision": "d095b08dfba877dd6181ab85dd28f7b0"
  },
  {
    "url": "guide/data-visual_Note/this指向.html",
    "revision": "d9194f8e5ae93051c86041c2356aa5c3"
  },
  {
    "url": "guide/node_Note/1、Node.js入门/1.Node基础与模块化.html",
    "revision": "1cabae2330c2e2aa9f5b39c357149be4"
  },
  {
    "url": "guide/node_Note/1、Node.js入门/2.包开发.html",
    "revision": "21b3489b23086a36f02f216792c4758c"
  },
  {
    "url": "guide/node_Note/1、Node.js入门/REVIEW.html",
    "revision": "ad51249c82cb4f36cb602d938b85b84b"
  },
  {
    "url": "guide/node_Note/1、Node.js入门/正则表达式.html",
    "revision": "cbbfdea2c989857847f40944759ad6eb"
  },
  {
    "url": "guide/node_Note/2、模块/1.内置API模块（上）.html",
    "revision": "0f4303d56093db2e840c4ecf44c1672c"
  },
  {
    "url": "guide/node_Note/2、模块/2.内置API模块（下）.html",
    "revision": "3650a45618d7bc88485a754a50a9c714"
  },
  {
    "url": "guide/node_Note/2、模块/3.第三方模块（包）.html",
    "revision": "f21099442fcf54aa99faa81451ce98b7"
  },
  {
    "url": "guide/node_Note/2、模块/ES6-promise.html",
    "revision": "1054e2be90c82515e0e01a513cd0478d"
  },
  {
    "url": "guide/node_Note/2、模块/REVIEW.html",
    "revision": "fcd8e25d82f8ddb4b3641bbee05d0929"
  },
  {
    "url": "guide/node_Note/2、模块/数据请求.html",
    "revision": "80d132b9e903013dc383472743dd37ba"
  },
  {
    "url": "guide/node_Note/2、模块/跨域.html",
    "revision": "a51d7f3b90cde66cef4f4443f5c98340"
  },
  {
    "url": "guide/node_Note/3、路由/1.Node路由（上）.html",
    "revision": "1fc37ac0d8e849b7c0813a5f0055da1c"
  },
  {
    "url": "guide/node_Note/3、路由/2.Node路由（下）.html",
    "revision": "cea26f0921ce7539a359c11aacd34716"
  },
  {
    "url": "guide/node_Note/3、路由/API文档工具.html",
    "revision": "b1a373ff86c64aa25afa99b3fb0fe6e5"
  },
  {
    "url": "guide/node_Note/3、路由/ES6-深浅拷贝.html",
    "revision": "b55dc345fa75c321912b037b8ceebe62"
  },
  {
    "url": "guide/node_Note/3、路由/REVIEW.html",
    "revision": "cc7b66996b5b301e41279bd5d5837385"
  },
  {
    "url": "guide/node_Note/4、Express学习/1.Express路由.html",
    "revision": "80e41fea563621cc7bfb97fba50e35eb"
  },
  {
    "url": "guide/node_Note/4、Express学习/2.MongoDB数据库.html",
    "revision": "fa364af8693e1db861971f8330ee8a23"
  },
  {
    "url": "guide/node_Note/4、Express学习/3.登录鉴权.html",
    "revision": "3848f64a36964e321dc29d28976aaeca"
  },
  {
    "url": "guide/node_Note/4、Express学习/4.文件上传.html",
    "revision": "b4863408c517dd93bbd1caf413a66706"
  },
  {
    "url": "guide/node_Note/4、Express学习/MVC业务分层.html",
    "revision": "4136abff8f8e69c540e4f1e94f5a35f7"
  },
  {
    "url": "guide/node_Note/4、Express学习/web开发模式.html",
    "revision": "a0bb6bc9f469af1c61e896e1a1616699"
  },
  {
    "url": "guide/node_Note/4、Express学习/接口开发规范.html",
    "revision": "fd2a41ce1d986148c9d2be81a0a47ec1"
  },
  {
    "url": "guide/node_Note/5、Koa学习/1.koa学习（上）.html",
    "revision": "1ff29db821571e4e732b2ed8458c0749"
  },
  {
    "url": "guide/node_Note/5、Koa学习/2.koa学习（下）.html",
    "revision": "4c51824fedc78d1d79f39a3f6fbf451e"
  },
  {
    "url": "guide/node_Note/5、Koa学习/3.MySQL数据库.html",
    "revision": "fe5c1d4b0614d63bc3dcae6fbbfb6ce4"
  },
  {
    "url": "guide/node_Note/6、WebSocket学习/websocket入门.html",
    "revision": "7f96b325a4ad28dfa7c990e16ddeba95"
  },
  {
    "url": "guide/node_Note/index.html",
    "revision": "dca7d3261f923eec348d8163e69b4f7a"
  },
  {
    "url": "guide/project_Init/1、开发准备/ESLint使用.html",
    "revision": "782158b9e34f076b08d6da10ca4b2bd0"
  },
  {
    "url": "guide/project_Init/1、开发准备/vue-cli.html",
    "revision": "17299843bde6e719734829bf240abd77"
  },
  {
    "url": "guide/project_Init/1、开发准备/前端适配方案.html",
    "revision": "8c2937c72ebf131e861f5e298b15d389"
  },
  {
    "url": "guide/project_Init/2、前后端分离/api文档工具.html",
    "revision": "a113bdca89374358664e27ceae4edefc"
  },
  {
    "url": "guide/project_Init/2、前后端分离/mockjs使用.html",
    "revision": "aef1b5daeadaae3580ae4d5769693d3c"
  },
  {
    "url": "guide/project_Init/2、前后端分离/接口开发规范.html",
    "revision": "ba24153589c854040c24df2ac5795b69"
  },
  {
    "url": "guide/project_Init/index.html",
    "revision": "b35c693e645c7bb3cace24f5cfdb1faf"
  },
  {
    "url": "guide/uni-app_Note/1、uni-app入门/1.uni-app简介.html",
    "revision": "299c25adbaf4e7b57fe18bf168246829"
  },
  {
    "url": "guide/uni-app_Note/1、uni-app入门/2.配置文件.html",
    "revision": "40e5b4e0eb3c0c125fd44a26593c6f84"
  },
  {
    "url": "guide/uni-app_Note/1、uni-app入门/3.生命周期.html",
    "revision": "d53c10e5b4998fcab070f6aab934133a"
  },
  {
    "url": "guide/uni-app_Note/1、uni-app入门/REVIEW.html",
    "revision": "751e7f15135dcbb040c434748ddebf43"
  },
  {
    "url": "guide/uni-app_Note/index.html",
    "revision": "bef5867b88506abaf9d880af40b0554b"
  },
  {
    "url": "guide/vue_Note/1、前端工程化与webpack/1.webpack配置、打包和发布/REVIEW.html",
    "revision": "a5e68c5b4c9d702ca9ea5028213a0f91"
  },
  {
    "url": "guide/vue_Note/1、前端工程化与webpack/1.webpack配置、打包和发布/webpack.html",
    "revision": "1fbee3796fd899709880726be1e11f3a"
  },
  {
    "url": "guide/vue_Note/1、前端工程化与webpack/2.vue-cli自动部署/eslintrc.js语法规范.html",
    "revision": "ff90dc4c72f175c3d71a9026bbeb1eb0"
  },
  {
    "url": "guide/vue_Note/1、前端工程化与webpack/2.vue-cli自动部署/vue-cli.html",
    "revision": "1c20fe28c4bdc1f7a99c1aeb057346d2"
  },
  {
    "url": "guide/vue_Note/1、前端工程化与webpack/REVIEW.html",
    "revision": "8c913deca4e5e3c6dcca08118922aee6"
  },
  {
    "url": "guide/vue_Note/2、vue指令与过滤器/REVIEW.html",
    "revision": "97201aa704a642c6965e5c0aa5726061"
  },
  {
    "url": "guide/vue_Note/2、vue指令与过滤器/vue指令与过滤器.html",
    "revision": "5a9020b97b7f0b99ea424a665b63b161"
  },
  {
    "url": "guide/vue_Note/2、vue指令与过滤器/品牌案例/Bootstrap3.html",
    "revision": "9b2e8529308388522fbb7f51512dbcd5"
  },
  {
    "url": "guide/vue_Note/2、vue指令与过滤器/品牌案例/Bootstrap4.html",
    "revision": "7a61ac5af7d300d2094210ab1a6726ab"
  },
  {
    "url": "guide/vue_Note/2、vue指令与过滤器/品牌案例/REVIEW.html",
    "revision": "309bcc4e58ca43f7b82948760e73e1d7"
  },
  {
    "url": "guide/vue_Note/2、vue指令与过滤器/品牌案例/前端布局设计.html",
    "revision": "783246dceac179d376879de2446ae097"
  },
  {
    "url": "guide/vue_Note/3、计算机属性与监听器/Axios（上）.html",
    "revision": "5f7f03adfb8635aae4a3844c82d531a2"
  },
  {
    "url": "guide/vue_Note/3、计算机属性与监听器/Axios（下）.html",
    "revision": "4e59744d87a47e3f0678ed38582aa210"
  },
  {
    "url": "guide/vue_Note/3、计算机属性与监听器/计算机属性与监听器.html",
    "revision": "98be72e5348b50f1d7cd0cb91c73e6ad"
  },
  {
    "url": "guide/vue_Note/4、vue组件 —— 基础/1.vue组件基础.html",
    "revision": "420741931251f01ac03c1d64f7b42daf"
  },
  {
    "url": "guide/vue_Note/4、vue组件 —— 基础/2.vue的生命周期.html",
    "revision": "bb89f74734580d88ca74bb98140b9dc3"
  },
  {
    "url": "guide/vue_Note/4、vue组件 —— 基础/3.数据共享与ref引用.html",
    "revision": "69cb9f3cc5a3fdb97eb3a1f8b435c4df"
  },
  {
    "url": "guide/vue_Note/4、vue组件 —— 基础/REVIEW.html",
    "revision": "449a241617eabf5f1346ab2735d54a9b"
  },
  {
    "url": "guide/vue_Note/5、vue组件 —— 高级/0.Prop和自定义事件.html",
    "revision": "a91c53663b6e1111bfd132eddd8a4206"
  },
  {
    "url": "guide/vue_Note/5、vue组件 —— 高级/1.动态组件.html",
    "revision": "934930b8a9111249f8d25f6f3ad0ee17"
  },
  {
    "url": "guide/vue_Note/5、vue组件 —— 高级/2.插槽.html",
    "revision": "19e74dee61a1990b19deb8fd7edead4c"
  },
  {
    "url": "guide/vue_Note/5、vue组件 —— 高级/3.自定义指令.html",
    "revision": "73bf31a7c2b975be4dd0332e3bc0f6a6"
  },
  {
    "url": "guide/vue_Note/6、vue路由/REVIEW.html",
    "revision": "31f4d2ab211a669cba0426c65a8d308f"
  },
  {
    "url": "guide/vue_Note/6、vue路由/vue路由（上）.html",
    "revision": "4b5168bad57343780f131a3b535c92c4"
  },
  {
    "url": "guide/vue_Note/6、vue路由/vue路由（下）.html",
    "revision": "160e31ff0f0bb7a5c5f2d9eee72e23d2"
  },
  {
    "url": "guide/vue_Note/6、vue路由/vue路由进阶.html",
    "revision": "d374fef1b0113498b2168c5c60595d2d"
  },
  {
    "url": "guide/vue_Note/7、Vuex学习/Vuex.html",
    "revision": "9400c8794869141b1cb14a290879d37d"
  },
  {
    "url": "guide/vue_Note/7、Vuex学习/Vuex进阶.html",
    "revision": "ffc7add24264a3eb27a05fd4433f906d"
  },
  {
    "url": "guide/vue_Note/8、Vue服务端渲染/SSR.html",
    "revision": "40feb705c8528743b8c7c9f939a8c66e"
  },
  {
    "url": "guide/vue_Note/index.html",
    "revision": "3a82836bbcc3a3c92f4f9a8f27814335"
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
    "revision": "d7f4675689072b1c31879f094c56dfef"
  },
  {
    "url": "lencamo.png",
    "revision": "b90c1b69331c1b5e4447f33be2445dc0"
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
