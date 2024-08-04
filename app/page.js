"use client"

import {Box, Stack, Typography,Button, Modal, TextField} from '@mui/material';
//import * as firebase from "firebase/app";
import {firestore} from 'firebase/app'
import { collection, deleteDoc, doc, getDocs, query, setDoc} from 'firebase/firestore';
import { useEffect, useState } from 'react';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display:'flex',
    flexDirection:'column',
    gap:3,
  };
  

export default function Home(){
    const [pantry, setPantry]= useState([])

    const [open, setOpen]= useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const [itemName, setItemName] = useState('')

    const updatePantry = async () => {
        const snapshot = query[collection(firestore,'pantry')]
        const docs = await getDocs(snapshot)
        docs.forEach((doc) => {pantryList.push({"name": doc.id, "count": doc.data()})})
        console.log(pantryList)
        setPantry(pantryList)
    }

    useEffect(() => {
        updatePantry()
    }, [])

    // Adding Items
    const addItem = async (item) =>{
    const docRef=doc(collection(firestore,'pantry'), item)
    const docSnap  = await getDocs(docRef)
    if (docSnap.exist()) {
        const {count} = docSnap.data()
        await setDoc(docRef, {count: count + 1})
        await updatePantry()
        return
    }
    else {
        await setDoc(docRef, {count:1})
    }
    await updatePantry()
    }

    // Removing Items
    const removeItem  = async (item) =>{
    const docRef=doc(collection(firestore,'pantry'), item)
    await deleteDoc(docRef)
    await updatePantry()
    }
    return (
    <Box width="100vw" height="100vh" display={'flex'} justifyContent={'center'} flexDirection={'column'} alignItems={'center'} gap={2}>
        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title"   aria-describedby="modal-modal-description">
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Add Item
                </Typography>
                    <Stack width={'100%'} direction={'row'} spacing={2}>
                        <TextField id="outlined-basic" label="Item" variant="outlined" fullWidth value={itemName}
                            onchange={(e) => setItemName(e.target.value)}/>
                        <Button variant="outlined" onClick={() => { addItem(itemName) 
                        handleClose()}}
                            setItemName={''}> 
                            Add
                        </Button>
                    </Stack>
            </Box>
        </Modal>    
    <Button variant="contained" onClick={handleOpen}>
        Add
    </Button>
        <Box border ={'1px, solid, #333'}>
            <Box width="800" height="100px" bgcolor={'#ADD8e6'}>
                <Typography variant={'h2'} Color={'#333'} textAlign={'center'}>
                    Pantry Items
                </Typography>
            </Box>
            <Stack width="800px" height="300px" spacing='2' overflow={'auto'}>
                {pantry.map(({name, count}) => (
                <Stack key = {i} width="100vw"height="300vh" display={'flex'} justifyContent={'center'} alignItems= {'center'} bgcolor={'#f0f0f0'} alignContent={'space-between'}>  
                    <Box key = {i} width=" 100%" minHeight="150px" display={'flex'} justifyContent={'space-between'}  alignItems=  {'center'} bgcolor={'#f0f0f0'}  sx={{
                        paddingX:5
                    }}>
                        <Typography variant= {'h3'} Color={'#333'} textAlign={'center'} ontWeight={'bold'}>
                        {name}.charAt(0).toUpperCase() + {name}.slice(i)
                        </Typography>

                        <Typography variant= {'h3'} Color={'#333'} textAlign={'center'}>
                         quatity:{count}
                        </Typography>
                        <Button variant='contained' onClick={() =>removeItem(i)}>Remove</Button>
                    </Box>
                </Stack>
                ))}
            </Stack>
        </Box> 
     </Box>        
    )
}