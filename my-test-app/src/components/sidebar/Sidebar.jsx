
import React from 'react';
import nike from '../../assets/img/nike.jpg';
type Props = {
    header: string,
    price: string,
}

type State = {
    isOpen: boolean,
}

class Sidebar extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isOpen: false,
        }
    }
    toggleContent = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }
    render() {
        const { header, price } = this.props;

        if (!header) {
            return null;
        }
        return (
            <div data-test="header-line" className="sidebar">
                <img src={nike} alt="nike" />
                <h1 data-test="header">{header}</h1>
                <p data-test="price">$ {price}</p>
                <button onClick={this.toggleContent} data-test="btn">View Product Details</button>
                {this.state.isOpen && (
                    <div data-test="text-info" className="product-info">
                        Lightweight, full-length Nike Air Dot Weld Strobel gives PG the cushioning and comfort he needs to thrive during a long season.All-over flexibility helps him transition smoothly between both ends of the court.The laces feed through bands along the side of the foot. When tightened, the bands pull inwards to wrap over the foot, keeping it locked in and stable.The outsole uses a multi-directional tread pattern to provide stop-and-go traction and control on the court.
                    </div>
                )}
            </div>
        )
    }
}
export default Sidebar;