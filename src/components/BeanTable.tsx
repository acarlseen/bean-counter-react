// displays requested beans
// re-useable across views
// accepts list of coffee objects as prop

//TODO - accept arguments for hidden columns

import { DataGrid, GridColDef } from "@mui/x-data-grid"

interface BeanList {
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
  beanList: BeanList[],
  hiddenCols: {},
  handleSelection: (item:any) => void
}

const columns : GridColDef[] = [
  {field: 'id', headerName: 'ID', width: 10 },
  {field: 'roaster', headerName: 'Roaster', flex: 1},
  {field: 'bag_name', headerName: 'Bag', flex: 1},
  {field: 'origin', headerName: 'Origin', flex: 1},
  {field: 'producer', headerName: 'Producer', flex: 1},
  {field: 'variety', headerName: 'Variety', flex: 1},
  {field: 'process_method', headerName: 'Method', flex: 1},
  {field: 'blend', headerName: 'Blend?', flex: .5}
]

export const BeanTable = (props: Props) => {



  console.log(props);
  

  
  
  return (
    <div className="flex bg-black bg-opacity-30 text-white">
                <DataGrid rows={props.beanList} columns={columns}
                        checkboxSelection={true} 
                        columnVisibilityModel={props.hiddenCols}
                        onRowSelectionModelChange={ (item: any) => (props.handleSelection(item)) }
                        initialState={{
                          pagination: {paginationModel: {pageSize: 10}},
                          sorting: {sortModel: [{field: 'roaster', sort:'asc'}]},
                    }}
                        pageSizeOptions={[5, 10]}
                        className="bg-white bg-opacity-80"/>
            </div>
  )
}
