import './datatable.scss';
import {useState} from 'react';
import { DataGrid} from '@mui/x-data-grid';
import {userColumns, userRows} from '../../datatable_src';

import {Link} from 'react-router-dom';


export default function Datatable() {
    const [data, setData] = useState(userRows);

    const deleteHandler = (id) => {
        setData(data.filter(item => item.id !== id))
    }

    const actionColumn = [
        {
            field:"action",
            headerName:"Action",
            width: 200,
            renderCell: (params) => {
                return(
                    <div className="cellAction">
                        <Link to={`/users/test`} style={{textDecoration: "none"}}>
                            <div className="view_btn">View</div>
                        </Link>

                        <div className="delete_btn" onClick={() => deleteHandler(params.row.id)}>
                            Delete
                        </div>
                    </div>
                )
            }
        }
    ]

    return (
        <div className='datatable'>
            <div className="datatable_title">
                Add New User
                <Link to="/users/new" style={{textDecoration: "none"}} className="datatable_link">
                    Add New
                </Link>
            </div>
        <DataGrid
            className='datagrid'
            rows={data}
            columns={userColumns.concat(actionColumn)}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
        />
        </div>
  );
}
