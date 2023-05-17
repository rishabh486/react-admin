import { Box, useTheme, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    {
      field: "id",
      headerName: "ID",
    },
    {
      field: "registrarId",
      headerName: "Registrar ID",
    },

    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      headerAlign: "left",
      align: "left",
      cellClassName: "age-column--cell",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      headerAlign: "left",
      align: "left",
      cellClassName: "email-column--cell",
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      headerAlign: "left",
      align: "left",
      cellClassName: "phone-column--cell",
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
      headerAlign: "left",
      align: "left",
      cellClassName: "address-column--cell",
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
      headerAlign: "left",
      align: "left",
      cellClassName: "city-column--cell",
    },
    {
      field: "zipCode",
      headerName: "ZipCode",
      flex: 1,
      headerAlign: "left",
      align: "left",
      cellClassName: "zipCode-column--cell",
    },
  ];
  return (
    <Box m="20px">
      <Header title="Contacts" subtitle="managing the contacts" />
      <Box
        m="40px 0 0"
        height="64vh"
        width="65vw"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuidataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },

          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Team;
