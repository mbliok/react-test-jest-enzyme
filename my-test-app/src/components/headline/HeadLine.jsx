
import React from 'react';

type Props = {
    header: string,
    description: string,
    //  user: User[],
}
// type User = {
//     name: string,
//     age: number,
//     hasChild: boolean,
// }
type State = {
    isOpen: boolean,
}

class HeadLine extends React.Component<Props, State> {
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
        const { header, description } = this.props;

        if (!header) {
            return null;
        }
        return (
            <div data-test="header-line">
                <h1 data-test="header">{header}</h1>
                <p data-test="description">{description}</p>
                <button onClick={this.toggleContent} data-test="btn">Show aditional info</button>
                {this.state.isOpen && (
                    <div data-test="text-info">
                        asdasdadsasd
                        <hr />
                         asd
                    </div>
                )}
            </div>
        )
    }
}
export default HeadLine;