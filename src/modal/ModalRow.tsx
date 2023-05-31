import React from 'react';
import {Box, Modal, Stack} from "@mui/material";
import {Data} from "../types";



type ModalMain = {
    currentData: Data | null
    open: boolean
    handleClose: () => void

}
export const ModalRow: React.FC<ModalMain> = ({ currentData, open,handleClose}) => {

    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={{
                position: 'absolute' as 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgColor: 'background.paper',
                border: '2px solid #000',
                color: '#fff',
                fontSize: '25px',
                p: 4
            }}>
                {currentData && <Stack>
                    <div>id:{currentData.id}</div>
                    <div>name:{currentData.name}</div>
                    <div>img:<img src={currentData.image} alt="img"/></div>
                </Stack>
                }
            </Box>
        </Modal>

    );
};

