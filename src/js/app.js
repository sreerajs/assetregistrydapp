
  var web3Provider= null;
  var contracts;

  if (typeof web3 !== 'undefined') {
    App.web3Provider = web3.currentProvider;
  } else {
    // If no injected web3 instance is detected, fall back to Ganache
    App.web3Provider = new Web3.providers.HttpProvider('https://rinkeby.infura.io/yGEHQFbey55ozzDha3hf');
  //  Web3j web3 = Web3j.build(new HttpService("https://rinkeby.infura.io/<your-token>"));

  }
  web3 = new Web3(App.web3Provider);


wallet_private_key="e4735f0f337b0a21c83523aa49a643f17f53551e025af2b5efa6b882f62c7541";
wallet_address="0x15e154223c1cBc4229574776098f0e690522b2EE";
device_address="0x2B2BC2D9Fc00eBd799448194C90b73C817f419EA";
contractaddress="0x567AE30f19d77e51F8D4a5AE95cfCc6B1a7F61BE";

DERcert="-----BEGIN CERTIFICATE-----MIIFkTCCA3mgAwIBAgIBBTANBgkqhkiG9w0BAQsFADCBlTELMAkGA1UEBhMCVVMxEzARBgNVBAgMCkNhbGlmb3JuaWExFjAUBgNVBAcMDVNhbiBGcmFuY2lzY28xFjAUBgNVBAoMDU5ldG9iamV4IEluYy4xEzARBgNVBAsMCk9wZXJhdGlvbnMxLDAqBgNVBAMMI05ldG9iamV4IEluYy4gQ2VydGlmaWNhdGUgQXV0aG9yaXR5MB4XDTE4MTEzMDE3NDkxM1oXDTIwMTEyOTE3NDkxM1owgZYxCzAJBgNVBAYTAlVTMRMwEQYDVQQIDApDYWxpZm9ybmlhMRYwFAYDVQQHDA1TYW4gRnJhbmNpc2NvMRYwFAYDVQQKDA1OZXRvYmpleCBJbmMuMRMwEQYDVQQLDApPcGVyYXRpb25zMS0wKwYDVQQDDCQ4MzAwYzEyMS1mYTA3LTQwOGItYjdiZi03YjgxM2JkZjdlOGYwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDTn0gyczU+GmD1CpkwYGPYJmPIa+HJDAUT0Puo7MrEwuvcknjh/JxZeq2xffzlmvKGUG67uzr5rk2CUhyf4Q/U/4nSMcE9+KC684KPSYv0xuuEM8SLCgc1eklD/uJ0z0VWveLIFJp0wg9RBYEBiFraUtOl3qk0LGJrePptpWCAbxAf2LotofVFKd8H2FjxvuOxJ8JFDebtyYKW6b0/0Zbpvp0wlrexd5DAu9oYmB66r/yMb4+QePfTBbYrlLTr4eCLbm0bGwul65KSB/KQ1CCbynd3KIEK+3qi1mu8qU/HkCJENFYY7Lp58cfCaxavf0qwmaJNAjDzarMaZiq8XnfZAgMBAAGjgegwgeUwDgYDVR0PAQH/BAQDAgeAMAkGA1UdEwQCMAAwEwYDVR0lBAwwCgYIKwYBBQUHAwIwHQYDVR0OBBYEFOUEtzK38VzdJSqi546J6Obec/iGMB8GA1UdIwQYMBaAFC/CJnfo/LMv2YUhq3+YuFjNtRi9MD4GCCsGAQUFBwEBBDIwMDAuBggrBgEFBQcwAoYiaHR0cDovL21xdHQubmV0b2JqZXguY29tL2NhL0NBLmNydDAzBgNVHR8ELDAqMCigJqAkhiJodHRwOi8vbXF0dC5uZXRvYmpleC5jb20vY2EvQ0EuY3JsMA0GCSqGSIb3DQEBCwUAA4ICAQBjo2GtwVfudm3VLvsWmD7MBI1hUEUO6bwgZL8AG5GJf81dFTRVZncyl1D/Mg7uF/z0DjiCkJxnq0UenEWQK6PShuCodiK3C+6gdgGll4rWuc9Xt0i7kApGdE3ZplFRM3dmXZFwJO1k8amt7Slm6dhgwo/hfmFZ+wijdEjsvDmsQ3A8HSc9hb0muu6eaOyvAVQ9TikA6XBglJqh3/aBSC03rBEZskfah18wxMf85nTYPlXmQMVmTyNnO/PR2grOtLlzbYXnZc/0AUE1vC3il2rVvQftoLfXaXSRTYvsx+g95dA9jPnCOy8GwGGATLsHH1LyJZ1IvvC/XYyYDMmOUGZvQvhV/s/JTEXfI1Y4tIt2oFJ8vp4aMMNkapDK6slOxrg8dfzBLJXSiDPhXcxDbq+jLE1krEGIxzB8o4pd4d2d2KZZH3ljER5LyOKYeHxKoT18DKHR85MJpQi80u9cV7b1Y06XEm48y8d3jEKIJ6b8pLtJXRpnRnF9bxV5aVYzZRKWT9qCOlFqLDBPQGqgEr6FtOrs5An06e4wN0qDEPlSoIg5aQV4ne9GimwipWrq8VThg8/f3tw6Xkb3Ff20xGMQFFJD8ovcGGPnUauWizENEwCHoJUia7q2FpsuJgxFkPaDcqLxeWxbavXeHhWu+bjJVb45Ywfpn57US5+1a6b8lw==-----END CERTIFICATE-----";




    var abi =[
	{
		"constant": false,
		"inputs": [
			{
				"name": "_newAdmin",
				"type": "address"
			}
		],
		"name": "addNewAdmin",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_propId",
				"type": "uint256"
			}
		],
		"name": "getPropertyDetails",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_propId",
				"type": "uint256"
			}
		],
		"name": "rejectProperty",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_newUser",
				"type": "address"
			}
		],
		"name": "approveUsers",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_newSuperAdmin",
				"type": "address"
			}
		],
		"name": "addNewSuperAdmin",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "creatorAdmin",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_propId",
				"type": "uint256"
			},
			{
				"name": "_newValue",
				"type": "uint256"
			}
		],
		"name": "changeValue",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_propId",
				"type": "uint256"
			},
			{
				"name": "_newOwner",
				"type": "address"
			}
		],
		"name": "changeOwnership",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_propId",
				"type": "uint256"
			},
			{
				"name": "_value",
				"type": "uint256"
			},
			{
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "createProperty",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "propOwnerChange",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "users",
		"outputs": [
			{
				"name": "",
				"type": "int256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_newUser",
				"type": "address"
			}
		],
		"name": "addNewUser",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "verifiedUsers",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_propId",
				"type": "uint256"
			}
		],
		"name": "approveProperty",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_propId",
				"type": "uint256"
			}
		],
		"name": "approveChangeOwnership",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "properties",
		"outputs": [
			{
				"name": "status",
				"type": "uint8"
			},
			{
				"name": "value",
				"type": "uint256"
			},
			{
				"name": "currOwner",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
];

contracts =  web3.eth.contract(abi).at(contractaddress);


    web3.eth.getAccounts(function(error, accounts) {
    if (error) {
    console.log(error);
    }

    contracts.WriteAssetInfo(device_address, DERcert, rate ,_produced, _consumed, _reputation, {gas: 1000000, gasPrice: web3.toWei(20, 'gwei')}, function(error, result){
        if(!error)
            console.log(JSON.stringify(result));
        else
            console.error(error);
      });



    });

  
