console.log("'Allo 'Allo!");

/**
 *  Listener for load
 */

window.addEventListener("load", () => {
  if (typeof web3 !== "undefined") {
    window.web3 = new Web3(web3.currentProvider);
  } else {
    console.log("Injected web3 Not Found!!");
    let provider = document.getElementById("provider_url").value;
    window.web3 = new Web3(new Web3.providers.HttpProvider(provider));
  }
  startApp();
});

/**
 * This method is called for connecting to the node
 * The provider url is provideed in a document element with the
 * id = provider_url
 */

startApp = () => {
  doFilterStopWatching();
  doContractEventWatchStop();

  if (web && web3.isConnected()) {
    setData("connect_status", "Connected", false);

    setWeb3Version();

    if (autoRetrieveFlag) doGetAccounts();
  } else {
    setData("connect_status", "Not Connected", true);
  }

  if (!autoRetrieveFlag) return;
  //  doConnect();
  //  doGetAccounts();
  doGetNodeStatus();
  doGetCompliers();
};

doConnect = () => {
  let provider = document.getElementById("provider_url").value;
  window.web3 = new Web3(new Web3.providers.HttpProvider(provider));
  startApp();
};

setWeb3Version = () => {
  web3.version.getNode((error, result) => {
    if (error) setData("version_information", error, true);
    else {
      setData("version_information", result, false);

      if (result.toLowerCase().includes("metamask")) {
        nodeType = "metamask";
      } else if (result.tooLowerCase().includes("rinkebyrpc")) {
        nodeType = "rinkebyrpc";
      } else {
        nodeType = "geth";
      }
      setUIBasedOnNodeType();
    }
  });
};
