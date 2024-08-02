import {Box, Stack} from '@mui/material';
import { display, width } from '@mui/system';

const items = [
    'potato',
    'tomato',
    'garlic',
    'onion',
    'ginger',
    'Kali'
]
export default function Home(){
    return{
    <Box
        width="100vw" 
        height="100vh"
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        >
        <Box width="800" height="100px" bgcolor={'#f0f0f0'}>
        <Topography variant={'h2'} Color={'#ADD8E6'} textAlign={'center'}> Pantrty Items</Topography>
            <Stack width="800px" height="600px" spacing='2' overflow={'scroll'} border={'1px, solid, #333'}>
             {items.map((i)) => (
             <Box key = {i}
            width="100vw" 
            height="300vh"
            display={'flex'}
            justifyContent={'center'}
            alignItems= {'center'}
            byColor={#f0f0f0}>
                <Topography 
                variant= {'h4'} Color={'#333'} textAlign={'center'} ontWeight={'bold'}>
                     //Capitalize the first letter of the items
                     i.charAt(0).toUpperCase() + i.slice(i)
                </Topography>
                
            </Box> 
            {i}  
             )}
             </Stack>
    </Box>
    };
}