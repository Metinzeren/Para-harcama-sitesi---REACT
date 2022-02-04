import React from "react";
import '../Header.css'

export default function Header({ money, total, setTotal }) {
  return (
    <div className="header">
      {(total > 0 && <span>Harcayacak {money - total} $ paranız kaldı</span>) || (
        <>Harcamak için {money} $ paranız var</>
      )}
    </div>
  );
}
