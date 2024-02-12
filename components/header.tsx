import { useRouter } from "next/router";
import "./header.css";
import React from "react";

function Header() {
  const router = useRouter();
  return (
    <div className="header">
      <div className="headerTitle" onClick={() => router.push("/complex")}>
        Complex
      </div>
      <div className="headerTitle" onClick={() => router.push("/fourier")}>
        FFT
      </div>
      <div className="headerTitle" onClick={() => router.push("/trigonometry")}>
        Trigonometry
      </div>
    </div>
  );
}

export default Header;
