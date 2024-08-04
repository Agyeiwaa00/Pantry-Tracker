import {Box, Stack, Topography, Button} from '@mui/material';
import {firestore} from '@/firebase'
import { collection, getDocs, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';

export default function Home(){
    const [pantry, setPantry]= useState([])

    const [open, setOpen]= useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    useEffect(() => {
        const updatePantry = async () => {
        const snapshot = query[collection(firestore,'pantry')]
        const docs = await getDocs(snapshot)
        docs.forEach((doc) => {pantryList.push(doc.id)})
       setPantry(pantryList)
    }
        updatePantry()
    }, [])
    return (
    <Box width="100vw" height="100vh" display={'flex'} justifyContent={'center'} flexDirection={'column'} alignItems={'center'} gap={2}>
      <Box border ={'1px, solid, #333'}>
        <Button variant="contained">Add</Button>
        <Box width="800" height="100px" bgcolor={'#f0f0f0'}>
      
        <Topography variant={'h2'} Color={'#ADD8E6'} textAlign={'center'}>Pantry Items</Topography>
        </Box>

        <Stack width="800px" height="600px" spacing='2' overflow={'scroll'} border={'1px, solid, #333'}>
             {pantry.map((i) => (
            <Box key = {i} width="100vw"height="300vh" display={'flex'} justifyContent={'center'} alignItems= {'center'}
            bgcolor={'#f0f0f0'}>
               
                <Topography variant= {'h4'} Color={'#333'} textAlign={'center'} ontWeight={'bold'}>
                     
                     i.charAt(0).toUpperCase() + i.slice(i)
                </Topography>
            </Box>
            ))}
        </Stack>
        </Box> 
     </Box>        
    )
}