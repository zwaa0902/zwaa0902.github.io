'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "bdd5ff90e1b16b4c836183f09407a6ec",
"version.json": "866e3b61324b494f465c02b8abc25145",
"index.html": "93578d3556b08c439318236918df111b",
"/": "93578d3556b08c439318236918df111b",
"main.dart.js": "7cc9ae659b130fe57fd0378050802e7d",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "66d47d22b72de3b9eb398782999e7ffc",
".git/config": "2501002919e5fded7e7b70e688bb51f0",
".git/objects/95/8b3103c7b071277c9e1f56c25ca5021534b3cb": "b525bac7f5b98e1b5e877a3203fa4d4b",
".git/objects/92/87fb5a3d74dfc85957d7331d09d14fedea8c20": "01838d607254d306a3899aa26176fc67",
".git/objects/50/bf3823c065e5e6917b6972be5c05b896b9e9ae": "b559e5bfa8489adaa53724ac9ec9c183",
".git/objects/68/4ebd569fbeb890b1d8d3ce73cfdf3bb4d78022": "5426d825b86be5392670df2e71e30aa0",
".git/objects/57/3b6f4ea019d3285353a14390fe114fe9037497": "d11f6cc690a2acb45cc75cd2d8a5ae7c",
".git/objects/3b/be8c27453e01ec38d71c9cb1271c8f18cf12cf": "e31c95df4a44635226c5bf0fe5eb5b4f",
".git/objects/6f/1e4b72289844a1e0848061871d152574e2c6f4": "dea55b5ac0605c3829e186222689974a",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/56/ddc7c5cc28a89c96f783306c2d7a08b3b5ebc7": "8775237e01d5a13d6bc8abcbaa35f54d",
".git/objects/3d/4784e54a821bfcdee90487d316da3dba66824d": "8387e0febcd16c1246c3c796c336b020",
".git/objects/05/37548f3a05bc35aa45764b4f1ca463f16c2397": "37420e8b1302d6865054249bd81dcd16",
".git/objects/05/86b26170c91bd8ccffca4d78945ceb8d03042b": "f8fda1ec53911a5459a88d5893a1813e",
".git/objects/9d/38b8b63afaeef636107155da8ce160a422fc80": "7c10685cb000006d47b62f58bb6c0f9b",
".git/objects/9d/66621064264217660bbe70eda850a7af02f7d8": "78b8a37a1ca3719fb7265a061b6ffc67",
".git/objects/a3/38841dfac3af42694ff50ad73c3dc449432553": "90071c038420180995990a73ef876dce",
".git/objects/b2/65ed4d1aeed8cefebd1168b81a6ffb368b0cdb": "1bb905c1172188cf1c3a2e9fa123dccf",
".git/objects/ac/f3c31c261d53f1cf0b5037c26bee159bb540ac": "41684f6eef1128ab40dbb5031389c734",
".git/objects/d7/2897bbf21c0669e8e5d0adc2c2d3616cabc79a": "bde7174df4c04a256a46fc346e2da61d",
".git/objects/df/9e9500cfcd36a16fc4926ee2458163424c6d02": "0222fe8bc5f5c481af45a6e3653e9ea4",
".git/objects/da/63aeb9da9df0143a8dd6a9f9c2507881dd34fa": "1b64b3c2ee6018588dc5f7a434826e36",
".git/objects/a2/c2c501d92cade4609fbff2a20d058036a0f07d": "5799cad65f96fe00122233a5625d5041",
".git/objects/bd/3cc9711533de5f65174d2f4990490e8991ae6f": "3ec7ebcd73910afce9210c2597d5a0a4",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e2/4b6807bd0ac92a42ffca8350d1f9440509bede": "f44fe4086aba8d0041db8cb34d6ec749",
".git/objects/e2/ef6037ca0bcfc63ec2799568126fa61bcd501e": "a51b33eec3adf6a3a81ae6a9870906fa",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/17c8d84fbdb0bb048c9f7a6645d2b15de88937": "dc7f3733869db2057d6685b668a0e69b",
".git/objects/ee/1c91e6f417e54bf3a25ff634511c0c6dfbf0db": "e21c2db4273c76b96ad7eca38d210d18",
".git/objects/ee/a1f4de4cd9b4e56c1c53a7721e07edc31e2e27": "8cde91cf39788bf05d19529c29269793",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/ca/ced79727e678fcc9276d00d5cd2a397288add2": "c06f3adaa0b2edb17e93e4edf4cad476",
".git/objects/e4/00c6d36383433ec6679f6f3b71c061fbe41624": "2f7b4f033c7bcb7f6ee0662d78aa08a6",
".git/objects/fe/0ced77e4c30561f55c6a90e3ce78148779633c": "7e23889a0cccc86e809b9b3ec1d41d13",
".git/objects/ec/f46eda97ff983ac9f84bbc787637a591178407": "092a9b4ea06fd9418d36492d37d056bd",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/29/b98a38c0233af6187e67325dc7e4c112d399cf": "a0d3e14d7e2dc2e408eef0aa5c6708cf",
".git/objects/16/5a8e765bee8723818bf5cc260b990b836c1165": "495c3cc8c3942ec13b9c3c1d786b4532",
".git/objects/16/998568b7107692ce7a7310287ccda513467141": "fab0ead8883dfa306c85b374374dd8a1",
".git/objects/16/5da67191b73406e15fc3e6cf7cda3c195dc735": "86cfac30d97fb45bba2f4417782645d6",
".git/objects/42/e22aab69a63c870e0b911660218950947847dd": "91e21a04af98c315ac668400a59fe64d",
".git/objects/45/a2e04239aa86e875b9128b351778105a69626b": "1fa0e06d1526b7ab8f2ccc4300a3f3a1",
".git/objects/45/9f3fe9071eb72c7aa9ca52ea4d8f57dfb2874e": "02b3ae0fdf04d38b8c670169e32d8895",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1a/9d42aef8122075a9ec2089f570a7531bc3c61b": "a52e7e39d6691158baef5ba05d9cc4af",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/a78b095da8e0e94f7b040c665d92a2d23cc20d": "abd8e93aa2111f33787dc7a0562a4d99",
".git/objects/21/9629a0ff4e7725f45d45cc2e903ea0b3937d6a": "44625d54d0c4c1ebb20e6866d597a701",
".git/objects/4d/bb61cdfbd0549ab2334521fe8eb54ff9b88dcb": "7a4d94f498e697f618c7c76c34a70ddd",
".git/objects/72/7c3cb721dd33abd674a8f166628de3f7617646": "f9e1694120b51f1cd6c02d79fc667ab7",
".git/objects/44/a62038fbcf2fe1159f528aad42b9468f214380": "89dc6fba712f49e2e33791c1eea6e4a3",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6e/a8862149f49850e77b5828a7da71f137eb24b3": "97d0e53853979f08c53bad2006f7d249",
".git/objects/5c/751b41e48ade58666b63e6b7d4cff2b65194c6": "12e46f68d7f4e5173b648687a9c155a6",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/91/ee4b900f78c9961ab80c801bb997d317d70719": "b31e44f2938056960b071b4f589ea9f5",
".git/objects/65/e53a97839f2094947f3205a0329cb95edf5772": "e8dd029a48b392d8013c7d9a96953374",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/30/6942dc5bda024438722d4da845f397d2b10e14": "682a06660c7a1bece06811374e7444ab",
".git/objects/08/7ab6a278c2fccdcb43566daf93616b897be880": "c7953073bc8e64db56526aa858f7a141",
".git/objects/6d/dfb8c2a58d23f67457747aa7652b72ab28f411": "8fe351d06b7306b7c4fd355fe4efa416",
".git/objects/6d/f2b253603094de7f39886aae03181c686e375b": "4e432986780adf1da707b08f0bc71809",
".git/objects/6c/0ad14088dd68c939eb1f70fa33c8c213df6670": "c5512f8b9df4a2a5d016fbf511f6a2dc",
".git/objects/97/b6eee463de5e4fcf79c6570e4173f50eca81d5": "b58977ec52e0607f13c5710fd432ef21",
".git/objects/97/77571585d30ef69063a6ca58a7c55a7316fac5": "50af61fb287f56fe2d279eed862946fc",
".git/objects/63/93e885ee70f99ca5f7044c829fa0d7fa0d0f5b": "412021d308daa687001627c587f20259",
".git/objects/0f/b75ef4a4b3eb1311c1bbcd6bf0f25653ae112d": "5c97d3c4382450b995fd2bf0b10b6c42",
".git/objects/64/4a006029b0907607b3a627a07316747c38ca6b": "402062d28d309e1226a23870cccd0938",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/bf/b59f348fe50839944354adabe225b0672803a7": "cf089250bbbd78e964060818939639c2",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/dd/059769b7827b05f2894024f123f9bbe6dc281a": "2e7b5a8c75c9c2455261fd5a878af6cc",
".git/objects/b6/5275dd34c50992115595e649768a1e89bf0f83": "985726f212b686813cf0417d2733f9d5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/4a321c17032948cd335ea5039e0ad50f742919": "3675e63e443d54a2a9e125c11d3357fd",
".git/objects/b0/0b4ac442f6963e1a2b1b682a25157b42692307": "1394c2f76a8eb82724f07244230cca16",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/f3492df2246ac74a35c1cf49ec8590c46f0c37": "89496a3087b2c3dbecc6c6bc2f6dfa53",
".git/objects/a1/50433254cea996153b1f15ba1a35dfc78055d2": "5cc9274cd7801e5d1d451724c87c5f58",
".git/objects/e6/20828d5360c4b99638d58b99d396e02d93da20": "20f2b47a2984b5ebfd198f0b2376e6dd",
".git/objects/f9/c0ce69c9c39d58e5d057c37b1765878d08b415": "c99f828e22a727cfff9aab218b37d2a2",
".git/objects/f7/9560a25d0df9c04989a2d000f20cf21c0e8539": "1dae7961546b291512940e8bada30a71",
".git/objects/e7/4940e24389c921433e28e5927562e67460bd5a": "caeda771011fc98b1bc4f220a169aedf",
".git/objects/cb/8c9c8a4796f8e4d1751d3613f1ed74beb55b7e": "61ae9fbbeba2fe8128369048a3849aa9",
".git/objects/cb/76bbf41f13459065b920f542ecb20301095e7b": "aff774993422f48d306323f2a899f67f",
".git/objects/ce/b6a8367c20c7ee82d3e7ef0778ea9307b00379": "659931335163cc0ae7e7e8eb9959bb6e",
".git/objects/46/ad715bfcdac3b330b747a3583053cb63b7e29b": "f608343d7d9339801cf4eb469ff51872",
".git/objects/79/ffa6589c684b5ee9829b33e3d9b6fde53e5f07": "c4a8befe91f8fc0a2e2e43ad7091d22e",
".git/objects/83/9010a824210a6712f8d2b119d04b5d241134ed": "c9058011dc4fcf501ff051a79673dc93",
".git/objects/1b/ef61d2f42de30d92e2f43c48969349303d313f": "80179d80ae91ae0b67dc0da2ab644196",
".git/objects/1b/f662e80d9b344de1921cacf5594e7cb186dd81": "edebae00a794b670c5e02ad63abb8e92",
".git/objects/77/16f9ea1eb38c243126019e79e34668e5451b0c": "0cb223117b393eb57705df03174ae0cb",
".git/objects/1e/af6621585c5eacca4d10acd53a5224b9150888": "08c5785ccc62a8988e268dce441e058a",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/4a/74302e316206935e679891018aa0cf83643ff5": "217461c1b4cffbf4295fcd13d4367ed1",
".git/objects/23/a5c1edfb68da66010db5741185b3e015da4395": "a772b7cad4b13b7069ec83721f6626f1",
".git/objects/4f/66e8fb5a525e30feabee928fcb47a56d1747fa": "5113b5c2d247defde0fe4a89927267f9",
".git/objects/8c/b2ef87c859023e9026b32fa9b3819064700c4b": "ea20193ee06bafc4f50934d734539565",
".git/objects/8c/b5b06192843f45a496a6d390a5c2664718b415": "4b7be6a667506298bcbcca9c0a14974e",
".git/objects/8c/1426df79475972b205c699b676d53e4c00b4f6": "5699d327ef5e5ae53b7498d5b1d30439",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/82/2e52798a88d395a842aaf6358a6a761481b3ac": "1a3afd28e273848ff62bad8491539c21",
".git/objects/49/d6d9a2c2a71ce553eda2be342c2596a1849ca7": "d9fe306846eb448b11fec3c713fd39df",
".git/objects/2e/5c5881b3aa816ed7f9ac9b30bd8beda3806db9": "3cf326e3ead02936560194da2c2707ff",
".git/objects/78/11feda75d13f9ccddb14c02fd26aec0f1ec766": "835269801ceea972dd90a278144b8468",
".git/objects/22/da92f295453053feebeb792063f598784fbdef": "4cb67fd9310808a7eb4dbe80e71e7796",
".git/objects/25/e2d9f56b11cd362337faf0a654f6948486b5b2": "7ae9e9e0b293c40853264d5667e2c7a8",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1dd5157ff113d8bbbbfd26dfa7b7d15b",
".git/logs/refs/heads/master": "335582c5c5f96ea7e98d683b69a68fd2",
".git/logs/refs/heads/main": "d5bfdae1d270a9f13ecc4fd50c994b4b",
".git/logs/refs/remotes/origin/main": "f801fd918cdb7be9f1d0104d240abdd6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "ca5d548092086770dc3b53e5a60fb0d6",
".git/refs/heads/main": "1673481e3b51728f5fdce2c4f327080f",
".git/refs/remotes/origin/main": "1673481e3b51728f5fdce2c4f327080f",
".git/index": "673a365d4dda07af887e93bdbac858cf",
".git/COMMIT_EDITMSG": "4f742c2a46aee71b1f2bf6ab8e7017e4",
"assets/AssetManifest.json": "6935359df0f1402e008f38d92ebeb287",
"assets/NOTICES": "de11d5e57cedf0ba656bf70e8651f636",
"assets/FontManifest.json": "866b9b20ab0e8c30ffe220d2a2d66abe",
"assets/AssetManifest.bin.json": "fac7e4fab7906cfb1bd0bafe0c4be837",
"assets/packages/awesome_snackbar_content/assets/types/warning.svg": "cfcc5fcb570129febe890f2e117615e0",
"assets/packages/awesome_snackbar_content/assets/types/failure.svg": "cb9e759ee55687836e9c1f20480dd9c8",
"assets/packages/awesome_snackbar_content/assets/types/success.svg": "6e273a8f41cd45839b2e3a36747189ac",
"assets/packages/awesome_snackbar_content/assets/types/help.svg": "7fb350b5c30bde7deeb3160f591461ff",
"assets/packages/awesome_snackbar_content/assets/back.svg": "ba1c3aebba280f23f5509bd42dab958d",
"assets/packages/awesome_snackbar_content/assets/bubbles.svg": "1df6817bf509ee4e615fe821bc6dabd9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/syncfusion_flutter_pdfviewer/assets/squiggly.png": "c9602bfd4aa99590ca66ce212099885f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/strikethrough.png": "cb39da11cd936bd01d1c5a911e429799",
"assets/packages/syncfusion_flutter_pdfviewer/assets/highlight.png": "7384946432b51b56b0990dca1a735169",
"assets/packages/syncfusion_flutter_pdfviewer/assets/underline.png": "c94a4441e753e4744e2857f0c4359bf0",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "abb60bf9bdfe69e5091bdbe769c5288a",
"assets/fonts/MaterialIcons-Regular.otf": "9aea0325250c0cae0cf5b392ab748eca",
"assets/assets/images/coffee.jpg": "55b107ab1af72ccb017fbcfa3ef2a92d",
"assets/assets/images/movie.jpg": "e5c45af57df0559b9efc68c755ab5a20",
"assets/assets/images/travel.jpg": "b05207c29506c4be5644b2549a3c722d",
"assets/assets/images/kiwi-fruit.jpg": "ad7797137fc4cb2bdbd7e24bd85214c1",
"assets/assets/images/gaming.jpg": "10ec58151b20f45b9de59404432cb930",
"assets/assets/images/others.jpg": "f8076c807fdb5ee9152fc33ea5da7876",
"assets/assets/images/badminton.jpg": "6d2c9dbb5f343e46e46c68560d29d7ee",
"assets/assets/images/shopping.jpg": "f2a89ac233e49e2efca757f5ec6b629c",
"assets/assets/images/beer.jpg": "6b96ad1dc970f604f5f347290ec50243",
"assets/assets/images/hamburger.jpg": "85d11df3fb23a7075ec4e6a74ac0bc93",
"assets/assets/images/apple.jpg": "a4a113d5fd6e0f030528923d01980b0d",
"assets/assets/images/food.jpg": "ced70e886b15b1034da436831e5d5858",
"assets/assets/images/pill.jpg": "d47071b45bf00e4fbd2be6d9919a68ee",
"assets/assets/images/soccer-ball.jpg": "180033a14e25cad7ed90addfe103ef70",
"assets/assets/icons/hand.svg": "9cccb5deee8c3ef594b3ab8889b4da11",
"assets/assets/icons/earphone.svg": "7aa9e1883005388cc647b5348042b093",
"assets/assets/icons/stool.svg": "db772b6d614489ba5b3b010c1533327a",
"assets/assets/icons/wallet-yellow.svg": "0c247680dd701f10dc92497341251409",
"assets/assets/icons/chip.svg": "802296b21181be3cf39d7a10b5099ade",
"assets/assets/icons/brush.svg": "5a32827543f63c460299a7548ff52769",
"assets/assets/icons/movie.svg": "065cba06b43de05b81d571cd5a888bfb",
"assets/assets/icons/desk.svg": "0821ea10add7e31c2453b628604393ae",
"assets/assets/icons/vehicle-car.svg": "11df350eafdabea6b087d41766a23eec",
"assets/assets/icons/liquid.svg": "131b8ca0e506ff843f207905e82aed43",
"assets/assets/icons/trophy.svg": "436c77fc0b8bd5f0aec78afe65c75daa",
"assets/assets/icons/fan.svg": "8609d30d3ebaa01420b13b1a518400a2",
"assets/assets/icons/plan.svg": "a83942a81db58c62e57afb4baccaff21",
"assets/assets/icons/bill.svg": "a724ef81c7f6a17349bb4c086bcaaced",
"assets/assets/icons/camera.svg": "17699a01010f4fdacfacf6d97e153dc1",
"assets/assets/icons/adduser.svg": "9fe49ec16df15cf8d1605e63d90e92fd",
"assets/assets/icons/wardrobe.svg": "3d749e17903df808cb88c54f6826b866",
"assets/assets/icons/clock.svg": "ec36543c61864efb43c3b456559c8c52",
"assets/assets/icons/empty-box.svg": "ab93641d128191edce1f7721ffce9ded",
"assets/assets/icons/magnifier.svg": "9ffff8a4207ef9e77bbc67f38084be09",
"assets/assets/icons/suitcase.svg": "34ce9dde4ada9d376aa2f87a591b76cf",
"assets/assets/icons/food.svg": "a0076352177704dec1aad0f736a6424f",
"assets/assets/icons/gamepad.svg": "b7edb5046b1b458c05a8665553a27f53",
"assets/assets/icons/u-disk.svg": "5ffdb16fd3f4382b3037c1275f17ab09",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
