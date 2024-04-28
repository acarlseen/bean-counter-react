
interface coffeeBag {
    id?: string,
    roaster: string,
    bag_name: string,
    origin: string,
    producer: string,
    variety: string,
    process_method: string,
    blend: string,
}

interface Props {
    coffee: coffeeBag
}

export const BeanCard = (props: Props) => {
  return (
    <div className="flex flex-col h-100 w-100  bg-orange-900 rounded-lg shadow-lg p-5 gap-4">
        
        <div className="flex flex-row h-4 w-100 rounded-xl bg-emerald-700">
            
        </div>
        <div className="flex flex-row justify-center bg-orange-100 rounded-lg">
            <table className="border-spacing-x-3 border-separate m-3">
                <tbody>
                    <tr key={`0-${props.coffee.id}`}>
                        <td className="text-right">Roaster</td>
                        <td className="border-l-2 border-b-2 border-orange-700 pl-2">{props.coffee.roaster}</td>
                    </tr>
                    <tr key={`1-${props.coffee.id}`}>
                        <td className="text-right">Bag</td>
                        <td className="border-l-2 border-b-2 border-orange-700 pl-2">{props.coffee.bag_name}</td>
                    </tr>
                    <tr key={`2-${props.coffee.id}`}>
                        <td className="text-right">Origin</td>
                        <td className="border-l-2 border-b-2 border-orange-700 pl-2">{props.coffee.origin}</td>
                    </tr>
                    <tr key={`3-${props.coffee.id}`}>
                        <td className="text-right">Variety</td>
                        <td className="border-l-2 border-b-2 border-orange-700 pl-2">{props.coffee.variety}</td>
                    </tr>
                    <tr key={`4-${props.coffee.id}`}>
                        <td className="text-right">Process</td>
                        <td className="border-l-2 border-b-2 border-orange-700 pl-2">{props.coffee.process_method}</td>
                    </tr>
                    <tr key={`5-${props.coffee.id}`}>
                        <td className="text-right">Producer</td>
                        <td className="border-l-2 border-b-2 border-orange-700 pl-2">{props.coffee.producer}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}
