/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { UltraVerifier, UltraVerifierInterface } from "../UltraVerifier";

const _abi = [
  {
    inputs: [],
    name: "EC_SCALAR_MUL_FAILURE",
    type: "error",
  },
  {
    inputs: [],
    name: "MOD_EXP_FAILURE",
    type: "error",
  },
  {
    inputs: [],
    name: "PROOF_FAILURE",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "expected",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "actual",
        type: "uint256",
      },
    ],
    name: "PUBLIC_INPUT_COUNT_INVALID",
    type: "error",
  },
  {
    inputs: [],
    name: "PUBLIC_INPUT_GE_P",
    type: "error",
  },
  {
    inputs: [],
    name: "PUBLIC_INPUT_INVALID_BN128_G1_POINT",
    type: "error",
  },
  {
    inputs: [],
    name: "getVerificationKeyHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_proof",
        type: "bytes",
      },
      {
        internalType: "bytes32[]",
        name: "_publicInputs",
        type: "bytes32[]",
      },
    ],
    name: "verify",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50612de8806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063937f6a101461003b578063ea50d0e41461006e575b600080fd5b6040517f016d9a7b9f7761920b0f34c761eb00fa37f6c06c1042814af76841db3c5316ad81526020015b60405180910390f35b61008161007c366004612ced565b610091565b6040519015158152602001610065565b6180006103805260036103a0527f2d1ba66f5941dc91017171fa69ec2bd0022a2a2d4115a009a93458fd4e26ecfb6103c0527f3063edaa444bddc677fcd515f614555a777997e0a9287d1e62bf6dd004d820016103e0527f202aaeda1a1516c78931c206c1545b8f68c1aa7dcdc41c9e50802fbb9618eb85610400527f12d7895327ebe34be0cf277886ac9f7c83068ffa57ac1a3c2776881324089b8b610420527f2626daff9d3fac3c8ff29cc8365ed56454f4f4bab8db41a14d627c8aa3c8da20610440527f2f9ab4e1c316b9a5210f0450c4128f97b15affe3989fdf2611e15b3843c43efb610460527f2d4950810b2649e316dc60c35e45b208af6182c42c8e3421759fc13f9356da5d610480527f2a644f62b3acc866356b728c5e66ec682e5ce9c18d28b864283c7965ded07bda6104a0527f2a131ca1eac535446021ac45ee68c292faba9f3969c1c91e05218d096a386bfe6104c0527f1de46ad8700a63cd0f2e94467673148cf73094bbad63be1e744af83d21c2fd4e6104e0527f2b54301bed89d8eca77842a33e7114589c1fc72aa922a4f50f9eea78ae15fe38610500527f05a37c467990b3e639074015516d55e8c6042f52bcba5cd07b31eecf576f1ee3610520527f0e73bb5131ea6e34ec5a648d94fad59c037f7bda69b3e152ab112771bc7ffa11610540527f05a71b46e37c9642c2c2b708f8ed2f02fe3db692b2418c9577262ce95978a7c5610560527f13a8294954bfab00c4e2e5725648b79efc90b49b61b3ae87d67b6d2158ac7af8610580527f2b6b8e4d43ab327e12ac47b6b3c0a388e9c311f87031817671605a8b5951a2736105a0527f173df533b7b5b34a2e729a123e2109ddba2ce35b27c0099ec32dd9551d4eb8dc6105c0527f052d2a4bc3f9fa6081e174fc6bb38f6c4df33d318870c3300f925db79f12e81f6105e0527f18011c8d4e2047581722cb8007681bccdf4e210d76bd21be279b200c7b9e6ae3610600527f1f8c01090586122baa40fa6ea67ba6d9d578f330a927132076033554a11a8704610620527f2f6de6b1cdf06648a5fd97e38df789bcb4f26452bc41097b8640c2bdd758d6a9610640527f158d9b7029d1fbad9e8c5584c85a07f20a50fe8d7ef47f0e26102dd399b2d369610660527f0bd4be6fd179d6ea96679ec291a2eab751ea34b0d2f4a82b64160c73b798e7cb610680527f07aefeecf5b8d111b6761c6856d08af9066db2873e45e010eaeb8132224a157b6106a0527f098a3f93359e407a507f6c02f77419b5013c321a19db680549efddd6e898c2e66106c0527f08a460315c22cf3a315a3a2034aa940c1104c73227fa44e82a4bdf4e7e7ff5376106e0527f16d417a3f323d535f16a4390c1167ed308612878e06aeae6618ebac00a932d41610700527f155e0c0a8790884c35d3e1bd2a0156dd1b29368b932a1edd049f8168d0475a43610720527f2cad1aff50d24fac63351c992e2c1c6f08a221858c31a6b93b1eeb5ff4345986610740527f05244b5256d4ae175e4481a147b691d35ef175967ff77514aa92382645405c4d610760527f14fa3d2f7838cd2b628013fbcc4a5964f90f86fee3c44f90f15b66cbb883b16d610780527f087cff60b464aea188316044a5bdd7ad11e09061a6bbb1538a16ea2043d818bb6107a0527f0edc0845445f3a9214ca8c4ce8bfd53897d91e27fc085631d7fb2a1225d3c40e6107c0527f30521fd3f90d6823143b31aa19fdb95c3622a2ebcfe40878a9b926f9bb5958706107e0527f030ac1cc92a28b967df7160de3f4bb3d18ea9b4e815b5c595a4cb7cae56db7c6610800527f2465a7e5d40cdae7124e40609f69a02cdbae4b8de36519517a574e2a2c8201fd610820527f0d3a5fd296b6cb7657205032d326c1126531247361cfb572fe626cdbc274fe6a610840527f2c76ae3fdcd620f284426dc5c68ba0a2c4b08dda0c3a6ccb925a93efdc34eeff610860527f272cf75f3946db3caa6727009b09309aa47f964e91a7a3a8da50d32e86e6341e610880527f0da622da8f6b0be315c8bf8cbcdb0689e44fbf75f444fa383b3097217ca82efb6108a0527f15b58e3eb2996f08c492bac2b59b1d78bc3b59383b7a81f5f3232d8135cd9b426108c0527e7cc3faa29c370aa887d30f5d808e54639d5451fdab5ead493e39f5c4866d4c6108e0527f1970a2e001ab27f02eed3e87423d2612783f012475883f5901331bc7858ed4cc610900527f14a6c7a05c29037d696e79a2deda0a921c09acad40940d6dc22b301c2a7678b1610920527f0b6e059990326ebd1ba7a8fef1241b2cc071c771d25a3b3c60cbb636b7b436be610940527f2593d28090129b0500b0d3b9f2c2542ed954fd071008215cbc48b82d7aa185e0610960527f2dd28f9bf290acb0db873d995f4f440291947faf2be9aa1017f75069600f2f4c610980527f1bda8c3bc0d7972d9c0010ec63786de0924ec7c8741edfae90234a6964989db06109a05260006109c08190526109e08190527f260e01b251f6f1c7e7ff4e580791dee8ea51d87a358e038b4efe30fac09383c1610a00527f0118c4d5b837bcc2bc89b5b398b5974e9f5944073b32078b7e231fec938883b0610a20527f04fc6369f7110fe3d25156c1bb9a72859cf2a04641f99ba4ee413c80da6a5fe4610a40527f22febda3c0c0632a56475b4214e5615e11e6dd3f96e6cea2854a87d4dacc5e55610a60527f05d33766e4590b3722701b6f2fa43d0dc3f028424d384e68c92a742fb2dbc0b4613400526103a05182811461089f576040517f7667dc9b000000000000000000000000000000000000000000000000000000008152600481018290526024810184905260440160405180910390fd5b7f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd477f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016024600435018281350661122052826020820135066112005282604082013506611260528260608201350661124052826080820135066112a0528260a082013506611280528260c0820135066112e0528260e0820135066112c05282610100820135066113205282610120820135066113005282610140820135066113605282610160820135066113405282610180820135066113a052826101a08201350661138052826101c0820135066113e052826101e0820135066113c05282610200820135066114205282610220820135066114005282610240820135066114605282610260820135066114405282610280820135066114a052826102a08201350661148052816102c08201350661160052816102e0820135066116205281610300820135066116405281610320820135066116605281610340820135066116805281610360820135066116a05281610380820135066116c052816103a0820135066116e052816103c08201350661170052816103e0820135066117205281610400820135066117405281610420820135066117605281610440820135066117805281610460820135066117a05281610480820135066117c052816104a0820135066117e052816104c08201350661180052816104e0820135066119605281610500820135066119805281610520820135066119a05281610540820135066119c052816105608201350661184052816105808201350661186052816105a08201350661188052816105c0820135066118a052816105e0820135066118c05281610600820135066118e05281610620820135066119005281610640820135066119205281610660820135066119405281610680820135066119e052816106a08201350661200052816106c08201350661202052816106e0820135066120405281610700820135066120605281610720820135066120805281610740820135066120a05281610760820135066120c05281610780820135066120e052816107a08201350661210052816107c08201350661212052826107e08201350661232052826108008201350661230052826108208201350661236052826108408201350661234052506109c05115610d1a576024803501806109e05160051b0190508035602082013560441b81019050604082013560881b81019050606082013560cc1b81019050608082013560a083013560441b8101905060c083013560881b8101905060e083013560cc1b8101905061010083013561012084013560441b8101905061014084013560881b8101905061016084013560cc1b810190506101808401356101a085013560441b810190506101c085013560881b810190506101e085013560cc1b810190508361350052826135205281613540528061356052868110878410168783108886101616610d14577feba9f4a60000000000000000000000000000000000000000000000000000000060005260046000fd5b50505050505b6103805160e01b6000526103a05160e01b60045260086000208061358052602480350160206103a05102808260206135800137600435602401915060c0826135a083013760e0016135802083810661266081905290925090508281800961268052828161268051096126a05250806000526112e0516020526112c051604052611320516060526113005160805260a0600020905081810661260052806000526001602053506021600090812082810661262052815261136051602052611340516040526113a0516060526113805160805260a09020818106612640819052828180096134205282816134205109613440528281613440510961346052806134805250806000526113e0516020526113c05160405261142051606052611400516080526114605160a0526114405160c0526114a05160e052611480516101005261012060002090508181066126c052806126e0525061260051612620516103c051600180856001602480350160206103a0510281018360058a0984600c8b0999505b81831015610eda57823585811085169450858a82089050858183018909975085818c01880996505084888209905084888b099950602083019250610e9b565b50505080610f0c577f374a972f0000000000000000000000000000000000000000000000000000000060005260046000fd5b50508161300052806130205250505050508081600161260051086126205109806103805160015b81811015610f48578483840992508001610f33565b5050613100528181800990508181820961312052506126c05161038051819060015b81811015610f7f578483840992508001610f6a565b50508061304052826001840382089050613400518084036103e051858286088684840992508687848808820990508684840992508687848808820990508687888686098808820990506103c051925086828609915086600188038708878485099450876001890389898b888d8b8c0909090896506130205194508493508782860994508488878709955085898388099650868a61312051890997508760206000526020805260206040528b8b8a0960605260028c036080528b60a0526020600060c0600060055afa611075577ff894a7bc0000000000000000000000000000000000000000000000000000000060005260046000fd5b60005198508b818a0990508b8b8a0998508b828a0991508b613120518a0998508b838a0992508b858a0998508b848a0993508b8a8a0998508b888a0997508b868a0998508b613020518d8b8c090998508b896130005109613060528b888b09613080528b848709613780528b8388096130a0528b826131005109613140528b8188096130c052505050505050505050505061264051506126005161262051828361190051840982611620510101846118e051850983611600510101098384611940518509836116605101018561192051860984611640510101098485868385096116a051096134805109858661198051870985611620510101876119605188098661160051010109925085866119c051870985611660510101876119a0518809866116405101010991508586878885870961208051096134805109870382089050856126405161348051096134805285868788613060518a0361208051086130c0510961348051098208905085612640516134805109613480528586878860018a036116a051086130a05109613480510982086136005250505050508061264051613480510961348052806117205161266051098182836120205161178051096116405108820890508161266051820990508182836120005161176051096116205108820890508161266051820990508182836119e0516117005109611600510882089050816118405183846126605161186051098586612680516118805109876126a0516118a05109080808826120c0518485612660516120e051098687612680516121005109886126a051612120510908080883846001612600510861262051098461262051866118c051870908935084818687612600518609860808925084838509935084856001612600510885099350846130a05161264051099250848385089350846116c0518509935084838603850893508481868761260051612060510961168051080892505050826130c05161342051098381850383089150836120a05183099150838461314051830983089150508261348051848386038508096136205250508061344051613480510961348052806116e0516116005109816117005161162051098261172051611640510983611740516116605109847f183227397098d014dc2822db40c0ac2e9419f4243cdcb848a1f0fac9f80000008687600389036117a0510888611760518a6116205161160051090909098586878889858a08880886088408611780510894505050505081828384856116605161160051086119e051870308611760510884600286036117a05108096126405109828384858685612040510887600189036117a051080985086117a05109613480510961364052505080613420516134805109613480526002810360038203826116005184036116205108836116205185036116405108846116405186036116605108856116605187036119e05108866134805188898888088a8b8b8a088c8a8e038e8c8d09080909099350868788612640516134805109898a8988088b8c8c8a088d8a8f038f8c8d090809090985089350868788613420516134805109898a8987088b8c8c89088d898f038f8b8c090809090985089350868788613440516134805109898a8986088b8c8c88088d888f038f8a8b090809090985089350505050836117c051820961366052505061346051613480518392500961348052806116205182036119e051088161204051612040510982611640516116405109836116e05185612040516116405109098485868384088785870888030886878788098889611620516119e0510861200051080908925050508261348051848561176051870360010884090990508261202051611640510883611640518503856116e05161204051090884858287611620518903612000510809868685090893505050828361264051613480510984856117605187036001088509099150826117e0518484840809613680525050806116205161162051098161164051611640510982611620518460118408098360048309915083600982099050836003840992508381850385848788611620516116205108612000510809089150508283846120205161164051088561164051611640510809840384856120005187036116205108850908915082613480518209905082836126405161348051098309915082611760518209905082611760518309915082836117e0518585850809613680510861368052505080613460516134805109613480528081611620516119e05109826120005161160051090881612020518303838461164051611620510985611660516116005109080882681000000000000000008209905082612040518403820890508282820890508261174051820990508268100000000000000000830991508283612000516119e05109830891508261172051848561166051611640510886038508098361176051858661204051612020510887038761166051880808099250836117005185858786860808096136c0525050612000518291506140009009816119e0518208905081614000820990508161164051820890508161400082099050816116205182089050816140008209905081611600518208905081611660518303820890508161174051820990508161400061202051098261200051820890508261400082099050826119e05182089050826140008209905082611660518208905082614000820990508261164051820890508261204051840382089050826117605182099050826117205184838508096136e0525050806126605161164051098161162051820890508161266051820990508161160051820890508161266051820990508161178051820890508082611660518403830891508161374052826116005184036119e05108836116605185036120405108848560018703840883098586848803600108830991508585876126405189858b61264051890908090861372052856126605161202051099450856120005186089450856126605186099450856119e0518608945085612660518609945085858703612040510894508561164051870361202051089150858687878903600108840987858903600108099150858487036116605108868760018903830882099050868760018903880887099550866126405184099250868284089250866126405184099250868684089250866126405184099250868184089250508161370052505083611620518503612000510892508361164051850385868488036001088609089250836117005161372051099150838461174051850983089150838461176051613740510983089150836116e0518309915083846117a051613700510983089150836136c05183089250836136e05184089250836118005184099250836134805184099250826136a05283613440516134805109613480525050508061378051826136a0518461368051866136605188613640518a61362051613600510808080808096137608190526126e0516137a08190526137c0919091526102e460043501610520816137e03750506105606137a020818106612700526000819052600160205381602160002006612720526002602053816021600020066127405260036020538160216000200661276052600460205381602160002006612780526005602053816021600020066127a0526006602053816021600020066127c0526007602053816021600020066127e0526008602053816021600020066128005260096020538160216000200661282052600a6020538160216000200661284052600b6020538160216000200661286052600c6020538160216000200661288052600d602053816021600020066128a052600e602053816021600020066128c052600f602053816021600020066128e05260106020538160216000200661290052601160205381602160002006612920526012602053816021600020066129405260136020538160216000200661296052601460205381602160002006612980526015602053816021600020066129a0526016602053816021600020066129c0526017602053816021600020066129e052601860205381602160002006612a0052601960205381602160002006612a2052601a60205381602160002006612a4052601b60205381602160002006612a6052601c60205381602160002006612a8052601d60205381602160002006612aa052601d6020535060216000908120828106612ac05281526123205160205261230051604052612360516060526123405160805260a08120829006612b00526113c0516113e0518482800985600387838609088683840914935050816131605280602061316001525050611400516114205184828309856003878386090886838409148416935050816000528060205250506130405160405260406131a06060600060075afa16604061316060808160065afa81169050611440516114605184828309856003878386090886838409148416935050816000528060205250508161304051613040510960405260406131a06060600060075afa16604061316060808160065afa81169050611480516114a05184828309856003878386090886838409148416935050816000528060205250508161304051836130405161304051090960405260406131a06060600060075afa16604061316060808160065afa81169050611200516112205184828309856003878386090886838409148416935050816000528060205250508161270051836001612b0051080960405260406131a06060600060075afa16604061316060808160065afa81169050611240516112605184828309856003878386090886838409148416935050816000528060205250508161272051836001612b0051080960405260406131a06060600060075afa16604061316060808160065afa81169050611280516112a05184828309856003878386090886838409148416935050816000528060205250508161274051836001612b0051080960405260406131a06060600060075afa16604061316060808160065afa811690506112c0516112e05184828309856003878386090886838409148416935050816000528060205250508161276051836001612b0051080960405260406131a06060600060075afa16604061316060808160065afa81169050611300516113205184828309856003878386090886838409148416935050816000528060205250508161278051836001612b0051080960405260406131a06060600060075afa16604061316060808160065afa8116905061134051611360518482830985600387838609088683840914841693505081600052806020525050816127a051836001612b0051080960405260406131a06060600060075afa16604061316060808160065afa81169050611380516113a0518482830985600387838609088683840914841693505081600052806020525050816127c051836001612b0051080960405260406131a06060600060075afa16604061316060808160065afa81169050610400516104205184828309856003878386090886838409148416935050816000528060205250506127e05160405260406131a06060600060075afa16604061316060808160065afa81169050610440516104605184828309856003878386090886838409148416935050816000528060205250506128005160405260406131a06060600060075afa16604061316060808160065afa81169050610480516104a05184828309856003878386090886838409148416935050816000528060205250506128205160405260406131a06060600060075afa16604061316060808160065afa811690506104c0516104e05184828309856003878386090886838409148416935050816000528060205250506128405160405260406131a06060600060075afa16604061316060808160065afa81169050610500516105205184828309856003878386090886838409148416935050816000528060205250506128605160405260406131a06060600060075afa16604061316060808160065afa81169050610540516105605184828309856003878386090886838409148416935050816000528060205250506128805160405260406131a06060600060075afa16604061316060808160065afa81169050610580516105a05184828309856003878386090886838409148416935050816000528060205250506128a05160405260406131a06060600060075afa16604061316060808160065afa811690506105c0516105e05184828309856003878386090886838409148416935050816000528060205250506128c05160405260406131a06060600060075afa16604061316060808160065afa81169050610600516106205184828309856003878386090886838409148416935050816000528060205250506128e05160405260406131a06060600060075afa16604061316060808160065afa81169050610640516106605184828309856003878386090886838409148416935050816000528060205250506129005160405260406131a06060600060075afa16604061316060808160065afa81169050610680516106a05184828309856003878386090886838409148416935050816000528060205250506129205160405260406131a06060600060075afa16604061316060808160065afa811690506106c0516106e05184828309856003878386090886838409148416935050816000528060205250506129405160405260406131a06060600060075afa16604061316060808160065afa81169050610700516107205184828309856003878386090886838409148416935050816000528060205250506129605160405260406131a06060600060075afa16604061316060808160065afa81169050610740516107605184828309856003878386090886838409148416935050816000528060205250506129805160405260406131a06060600060075afa16604061316060808160065afa81169050610780516107a0518482830985600387838609088683840914841693505081600052806020525050816129a051836001612b0051080960405260406131a06060600060075afa16604061316060808160065afa811690506107c0516107e0518482830985600387838609088683840914841693505081600052806020525050816129c051836001612b0051080960405260406131a06060600060075afa16604061316060808160065afa8116905061080051610820518482830985600387838609088683840914841693505081600052806020525050816129e051836001612b0051080960405260406131a06060600060075afa16604061316060808160065afa811690506108405161086051848283098560038783860908868384091484169350508160005280602052505081612a0051836001612b0051080960405260406131a06060600060075afa16604061316060808160065afa81169050610880516108a0518482830985600387838609088683840914841693505081600052806020525050612a205160405260406131a06060600060075afa16604061316060808160065afa811690506108c0516108e0518482830985600387838609088683840914841693505081600052806020525050612a405160405260406131a06060600060075afa16604061316060808160065afa8116905061090051610920518482830985600387838609088683840914841693505081600052806020525050612a605160405260406131a06060600060075afa16604061316060808160065afa8116905061094051610960518482830985600387838609088683840914841693505081600052806020525050612a805160405260406131a06060600060075afa16604061316060808160065afa81169050610980516109a0518482830985600387838609088683840914841693505081600052806020525050612aa05160405260406131a06060600060075afa16604061316060808160065afa8116905081826116005184612b00516119e051090861270051098283846116205186612b00516120005109086127205109820890508283846116405186612b00516120205109086127405109820890508283846116605186612b00516120405109086127605109820890508283846116805186612b00516120605109086127805109820890508283846116a05186612b00516120805109086127a05109820890508283846116c05186612b00516120a05109086127c051098208905082836116e0516127e051098208905082836117005161280051098208905082836117205161282051098208905082836117405161284051098208905082836117605161286051098208905082836117805161288051098208905082836117a0516128a051098208905082836117c0516128c051098208905082836117e0516128e051098208905082836118005161290051098208905082836119605161292051098208905082836119805161294051098208905082836119a05161296051098208905082836119c0516129805109820890508283846118405186612b00516120c05109086129a05109820890508283846118605186612b00516120e05109086129c05109820890508283846118805186612b00516121005109086129e05109820890508283846118a05186612b0051612120510908612a0051098208905082836118c051612a2051098208905082836118e051612a40510982089050828361190051612a60510982089050828361192051612a80510982089050828361194051612aa0510982089050826137605182089050600160005260026020528083036040525060406131a06060600060075afa16604061316060808160065afa16613360819052612b00516126c05161230051612320518682800987600389838609088883840914955050816000528060205250508060405260406131a06060600060075afa831692506040613160608061316060065afa8316925061234051612360518682830987600389838609088883840914861695505081600052806020525050836103c05185838509096040525060406131a06060600060075afa821691506040613220608061316060065afa8216915061230051600052612320516020526123405160405261236051606052806080526040806060604060075afa8216915060406131e06080600060065afa82169150613200518403613200526109c05115612b825761350051613520518582830986600388838609088783840914851694505081600052806020525050828182096040526040606080600060075afa8216915061354051613560518582830986600388838609088783840914851694505081600052806020525050604060006060600060075afa821691506132205160a0526132405160c05260406132206080606060065afa821691506131e0516040526132005160605260406131e06080600060065afa821691505b5080612bb2577ff755f3690000000000000000000000000000000000000000000000000000000060005260046000fd5b806133805261322051600052613240516020527f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c26040527f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed6060527f090689d0585ff075ec9e99ad690c3395bc4b313370b38ef355acdadcd122975b6080527f12c85ea5db8c6deb4aab71808dcb408fe3d1e7690c43d37b4ce6cc0166fa7daa60a0526131e05160c0526132005160e052610a005161010052610a205161012052610a405161014052610a60516101605260206000610180600060085afa9050806133a0526000516133c05250505061336051613380516133c0516133a051161616612ce2577f0711fcec0000000000000000000000000000000000000000000000000000000060005260046000fd5b600160005260206000f35b60008060008060408587031215612d0357600080fd5b843567ffffffffffffffff80821115612d1b57600080fd5b818701915087601f830112612d2f57600080fd5b813581811115612d3e57600080fd5b886020828501011115612d5057600080fd5b602092830196509450908601359080821115612d6b57600080fd5b818701915087601f830112612d7f57600080fd5b813581811115612d8e57600080fd5b8860208260051b8501011115612da357600080fd5b9598949750506020019450505056fea2646970667358221220c8d92cb1cc3109f7acc48b7b20847c6567cc59992574456d666b580d9c79d52c64736f6c63430008130033";

type UltraVerifierConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UltraVerifierConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UltraVerifier__factory extends ContractFactory {
  constructor(...args: UltraVerifierConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<UltraVerifier> {
    return super.deploy(overrides || {}) as Promise<UltraVerifier>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): UltraVerifier {
    return super.attach(address) as UltraVerifier;
  }
  override connect(signer: Signer): UltraVerifier__factory {
    return super.connect(signer) as UltraVerifier__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UltraVerifierInterface {
    return new utils.Interface(_abi) as UltraVerifierInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UltraVerifier {
    return new Contract(address, _abi, signerOrProvider) as UltraVerifier;
  }
}
