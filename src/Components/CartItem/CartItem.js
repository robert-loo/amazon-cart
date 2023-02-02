import React from "react";
import "./CartItem.css"

function CartItem() {
  return <div className="CartItem">
        <div className="CartItem-image">
            <img src="https://fdn2.gsmarena.com/vv/pics/apple/apple-ipad-pro-12-2020-1.jpg" alt="iPad Pro" />
        </div>
        <div className="CartItem-info">
            <div className="Info-title">
                <h2>Apple iPad Pro 2022</h2>
            </div>
            <div className="Info-stock">
                In stock
            </div>
                <div className="Item-actions">
                    <div className="Item-quantity">

                    </div>
                    <div className="Item-Delete">
                        Delete
                    </div>
                </div>
        </div>
        <div className="CartItem-price">
            $769
        </div>


  </div>;
}

export default CartItem;
