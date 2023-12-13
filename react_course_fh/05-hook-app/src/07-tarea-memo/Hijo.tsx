import React from "react";

interface HijoPropTypes {
  numero: number;
  incrementar: (num: number) => void;
}

export const Hijo: React.FC<HijoPropTypes> = React.memo(
  ({ numero, incrementar }) => {
    console.log("  Me volví a generar :(  ");

    return (
      <button
        className="btn btn-primary mr-3"
        onClick={() => incrementar(numero)}
      >
        {numero}
      </button>
    );
  }
);
