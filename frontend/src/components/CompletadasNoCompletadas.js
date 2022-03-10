import React, {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import GoBackButtonListHeader from "./GoBackButtonListHeader";
import {
    Card,
    CardContent,
    Typography
} from '@material-ui/core'

import {obtenerTareas} from "../redux/todoActions";

function CompletadasNoCompletadas(){
    const dispatch = useDispatch();
    const { tareas } = useSelector((state) => state.todos);

    useEffect(() => {

          dispatch(obtenerTareas());

      }, [dispatch]);


    const ObtenerPorciento =()=>{
        let total = 0
        let completadas = 0
        let no_completadas = 0
        let porciento = 0
        tareas.map((item)=>{
            total += 1;
            if (item.completado){
                completadas += 1;
            }else{
                no_completadas += 1;
            }

        })

        porciento = (100*completadas)/total; 


        return(
            <div className='CardResponsive'>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography>
                            Tareas Completadas: {completadas}
                        </Typography>
                        <Typography>
                            Tareas no completadas: {no_completadas}
                        </Typography>
                        <Typography>
                            Total de tareas: {total}
                        </Typography>
                        <Typography>            
                            Porciento de tareas cumplidas: {porciento.toFixed(2)}%
                        </Typography>
                </CardContent>
                </Card>
            </div>
        )
    }

    return(
        <div >
                <div className="row">
                    <div className="col-md-4 mb-2">
                        <GoBackButtonListHeader title={`Volver al Listado`} link={`/`} />
                    </div>
                    <div className="col-md-8">
                        <h5>
                        Resumen de las tareas 
                        </h5>
                    </div>
                </div>
                <div >
                <ObtenerPorciento/>
                </div>
            
        </div>
    )
}

export default CompletadasNoCompletadas;