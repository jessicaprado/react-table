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
      
        return (
            <thead>
                {fillerData.map((header, i) => {
                    return (
                        <tr key={i}>    
                            {(Object.keys(header)).filter(function(item, pos) {
                                return pos
                            })}
                        </tr>
                    )
                })
                    
                }
            </thead>
        )
    }
}

// uniqueArray = a.filter(function(item, pos) {
//     return a.indexOf(item) == pos;
// })

export default Header