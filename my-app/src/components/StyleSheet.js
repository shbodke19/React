import React from "react";
import "./StyleSheet.css";

function StyleSheet(props) {
  let className = props.Primary ? "Primary" : "";
  return (
    <div>
      <h1 className={`${className} font-xl `}>StyleSheet</h1>
    </div>
  );
}

export default StyleSheet;
