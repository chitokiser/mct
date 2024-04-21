let contractAddress = {
    cyaadAddr: "0x918f1CDDccB50FF8B7Dca5a13c9a81d321A392F5"
  };
  
  let contractAbi = {
  
    cyaad: [
      "function creatad(string memory _home,string memory _metainfo)public",
      "function withdraw( )public",
      "function g1() public view virtual returns(uint256)",
      "function g2(uint256 num) public view returns(uint256 aid,uint256 start,address owner,string memory home,string memory metainfo)",
      "function g3() public view virtual returns(uint256)",
      "function g1() public view virtual returns(uint256)",
      "function remain() public view virtual returns(uint256)",
      "function tax() public view virtual returns(uint256)",
    ]
  };
  
  let adget = async () => {
    // ethers setup
    const provider = new ethers.providers.JsonRpcProvider('https://bsc-dataseed1.binance.org/');
    const cyaadContract = new ethers.Contract(contractAddress.cyaadAddr, contractAbi.cyaad, provider);
  
  

    //6번
    let a6 = await cyaadContract.g2(6)
  
    document.getElementById("tmp_img6").src = (a6.metainfo);
    document.getElementById("tmp_home6").href = (a6.home);
  
  };
  
  
  
  
  (async () => {
    adget();
    let userProvider = new ethers.providers.Web3Provider(window.ethereum, "any");
    await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [{
        chainId: "0x38",
        rpcUrls: ["https://bsc-dataseed.binance.org/"],
        chainName: "Binance Smart Chain",
        nativeCurrency: {
          name: "BNB",
          symbol: "BNB",
          decimals: 18
        },
        blockExplorerUrls: ["https://bscscan.com/"]
      }]
    });
    await userProvider.send("eth_requestAccounts", []);
  })();