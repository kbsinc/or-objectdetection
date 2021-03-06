import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/typography';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ReactPlayer from 'react-player';


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: '50%',
        display: ''
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    title: {
        color: '#4D9D2A',
        marginBottom: '20px'
    },
    inputTitle: {
        marginTop: '30px'
    },
    Buttons: {
        marginTop: '10px'
    }
}));

export default function Configuration() {

    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const [state, setState] = React.useState({
        gilad: true,
        jason: false,
        antoine: false,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const { gilad, jason, antoine } = state;
    const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

    const handleAge = (event) => {
        setAge(event.target.value);
    };

    return (
        <div>
            <Grid container spacing={3} style={{ margin: '5%' }}>
                <Grid item xs={6} >
                    <Typography variant="h3" className={classes.title}>
                        Configuratie
                    </Typography>
                    <InputLabel className={classes.inputTitle}><b>Selecteer Camera Source</b></InputLabel>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-filled-label">Video Source</InputLabel>
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={age}
                            onChange={handleAge}
                        >
                            <MenuItem value={'Default'}>Default</MenuItem>
                            <MenuItem value={'192.168.1.1'}>OpenRemote</MenuItem>
                            <MenuItem value={'30.30.30.30'}>Fontys</MenuItem>
                        </Select>
                    </FormControl>
                    <InputLabel className={classes.inputTitle}><b>Selecteer Detecties</b></InputLabel>
                    <FormControl className={classes.formControl}>
                        <TextField id="standard-basic" label="Bijv. Person" />
                    </FormControl>
                    <InputLabel className={classes.inputTitle}><b>Detectie Opties</b></InputLabel>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox checked={gilad} onChange={handleChange} name="gilad" style={{
                                    color: "#4D9D2A",
                                }} />}
                                label="Directions"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={jason} onChange={handleChange} name="jason" style={{
                                    color: "#4D9D2A",
                                }} />}
                                label="Total People Count"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={antoine} onChange={handleChange} name="antoine" style={{
                                    color: "#4D9D2A",
                                }} />}
                                label="Boundary Boxes"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={gilad} onChange={handleChange} name="gilad" style={{
                                    color: "#4D9D2A",
                                }} />}
                                label="Calculate Line Cross"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={jason} onChange={handleChange} name="jason" style={{
                                    color: "#4D9D2A",
                                }} />}
                                label="Count People"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={antoine} onChange={handleChange} name="antoine" style={{
                                    color: "#4D9D2A",
                                }} />}
                                label="Show Speed"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={antoine} onChange={handleChange} name="antoine" style={{
                                    color: "#4D9D2A",
                                }} />}
                                label="Visualize Centers"
                            />
                            <Button variant="contained" color="primary" className={classes.Buttons}>
                                Save
                        </Button>
                            <Button variant="contained" color="default" className={classes.Buttons}>
                                Cancel
                        </Button>
                        </FormGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h3" className={classes.title}>
                        Camera Preview
                    </Typography>
                    <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                </Grid>
            </Grid>
        </div>
    )
}

