import React, {MouseEvent, useState} from 'react';
import {Box, Modal} from "@mui/material";

type Props = {
    src: string
}
export const ModalImg: React.FC<Props> = ({src}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
        setOpen(true);
    }
    const handleClose = () => setOpen(false);
    return (<>
        <div onClick={handleOpen}>
            <img
                style={{
                    minWidth: '50px', width: '100%', maxWidth: '200px', minHeight: '100px',
                    height: '100%', maxHeight: '300px', objectFit: 'contain'
                }}
                src={src}
                alt={'картинка'}
            />
        </div>
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box sx={{
                position: 'absolute' as 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgColor: 'background.paper',
                border: '2px solid #000',
                boxShadow: 24,
                p: 4
            }}>
                <img
                    style={{minWidth: '50px', width: '100%', height: 'auto', objectFit: 'cover'}}
                    src={src}
                    alt={'картинка'}
                />
            </Box>
        </Modal>
    </>)
};

