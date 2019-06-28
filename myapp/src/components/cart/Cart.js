import React from 'react';

  class Cart extends React.Component {
    render () {
      return (
        <div className="Cart-content">
          <h4>购物车</h4>
          <ul className="Shopping">
            <li className="te">
              <div className="Shopping-top"><b></b><em></em><span>Tiffany & Co.</span><s>></s></div>
              <div className="Shopping-bottom">
                <b></b>
                <span className="span"></span>
                <s>
                  <p>系列925纯银心形钥匙迷你吊坠项链</p>
                  <ul>
                    <li>银色-16英寸</li>
                  </ul>
                  <dl><dt><em>¥</em> 2848</dt><dd><i>+</i><span>1</span><i>-</i></dd></dl>
                </s>
              </div>
            </li>
          </ul>
          <div className="account">
            <p><i></i><b>全选</b><s>¥2927</s></p><span>结算<em>(2)</em></span>
          </div>
        </div>
      )
    }
  }
export default Cart;