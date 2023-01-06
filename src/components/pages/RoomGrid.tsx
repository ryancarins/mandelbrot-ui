import { Box } from '@mui/system';
import { CellClassParams, ColDef } from 'ag-grid-community';
import {AgGridReact} from 'ag-grid-react';
import { useRecoilState } from 'recoil';
import { RoomData } from '../../atoms/RoomData';

const booleanCellRule = {
    "preview-on": (params: CellClassParams) => params.value as boolean,
    "preview-off": (params: CellClassParams) => !params.value as boolean,
}

const columnDefs: ColDef[] = [
    {headerName: "Username", field: "username", filter: 'agTextColumnFilter', sort: 'asc'},
    {headerName: "Status", field: "status"},
    {headerName: "Auto Record", field: "auto_record_status"},
    {headerName: "Video", field: "recording_mode.video", cellClassRules: booleanCellRule},
    {headerName: "Preview", field: "recording_mode.preview", cellClassRules: booleanCellRule},
    {headerName: "Archive", field: "recording_mode.archive", cellClassRules: booleanCellRule},
    {headerName: "Resolution", field: "resolution"},
];

const defaultColDef: ColDef = {
    sortable: true,
    sortingOrder: ['asc', 'desc', null],
};

//if(preview) background colour suceess colour on true 

const RoomGrid = () => {
    const [roomData, ] = useRecoilState(RoomData)
    return (
        <Box component="div" className="ag-theme-alpine-dark" sx={{ flexGrow: 1, p: 0, width: '100%', height: '100%' }}>
            <AgGridReact
                rowData={roomData}
                defaultColDef={defaultColDef}
                columnDefs={columnDefs}
            />
        </Box>
    );
}

export default RoomGrid;