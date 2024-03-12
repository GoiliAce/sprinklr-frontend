import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import SimpleLineChart from '../../components/Chart';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    padding: theme.spacing(1),
    minHeight: '150px'
}));

function Home() {
    return (
        <>
            <Grid container spacing={2}>
                <Grid xs={2} display={'flex'} flexDirection={'column'} gap={'16px'}>
                    <Item sx={{ textAlign: 'left', height: '100%' }}>
                        <Box>
                            <Typography variant="h6" component="h1" gutterBottom>
                                Total Feedback
                            </Typography>
                            <Typography variant="h5" component="h2" gutterBottom>
                                5,000
                            </Typography>
                        </Box>
                    </Item>
                    <Item sx={{ textAlign: 'left', height: '100%' }}>
                        <Box >
                            <Typography variant="h6" component="h1" gutterBottom>
                                Total Feedback
                            </Typography>
                            <Typography variant="h5" component="h2" gutterBottom>
                                5,000
                            </Typography>
                        </Box>
                    </Item>
                </Grid>
                <Grid xs={7}>
                    <Item sx={{
                        height: '100%'
                    }}><SimpleLineChart /></Item>
                </Grid>
                <Grid xs={3}>
                    <Item sx={{
                        height: '100%'
                    }}>xs=6</Item>
                </Grid>
            </Grid>
        </>
    )
}
export default Home