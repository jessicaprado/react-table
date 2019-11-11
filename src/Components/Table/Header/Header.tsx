import React from "react";

interface Props {
    fillerData: any[]
}

class Header extends React.Component<Props> {
    constructor(props: Props ) {
        super(props)
        
    }

    render() {
        const {fillerData} = this.props;
        const headerTitles = Object.values(fillerData);
        console.log(headerTitles)

        return (
            <thead>
                {fillerData.map((header, i) => {
                    return (
                        <tr key={i}>
                            <th>{headerTitles[i]}</th>
                        </tr>
                    )
                })}
            </thead>
        )
    }
}

export default Header