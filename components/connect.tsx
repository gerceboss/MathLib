import React from "react";
import { BaseError } from "viem";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import Complex from "../pages/complex";
import { FFT } from "../pages/fft";
import "./connect.css";
import { Connected } from "./connected";
import Header from "./header";

export function Connect() {
  const { connector, isConnected } = useAccount();
  //   isLoading, pendingConnector
  const { connect, connectors, error } = useConnect();
  const { disconnect } = useDisconnect();

  return (
    <>
      <div>
        {isConnected ? (
          <>
            <Header />
            <Connected>
              <button
                className="metamaskBtn disconnect"
                onClick={() => disconnect()}
              >
                Disconnect from {connector?.name}
              </button>
            </Connected>
          </>
        ) : (
          <div className="container">
            {/* x.ready &&  */}
            {connectors
              .filter((x) => x.id !== connector?.id)
              .map((x) => (
                <button
                  key={x.id}
                  onClick={() => connect({ connector: x })}
                  className="metamaskBtn"
                >
                  {x.name}
                  {/* {isLoading && x.id === pendingConnector?.id && " (connecting)"} */}
                </button>
              ))}
          </div>
        )}

        {error && <div>{(error as BaseError).shortMessage}</div>}
      </div>
    </>
  );
}
