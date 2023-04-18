import moment from "moment"
import { Info } from "../Host/Info"
import { Quetzal } from "./Moneda"

const ConvetirPlanAData=(data)=>{
return data.map((item,index)=>{
    return {id:item.idplan, name:'Cantidad: '+item.monto+" Interes: "+item.interes+'%'}
})
}
const ConvetirClAData=(data)=>{
    return data.map((item)=>{
        return{id:item.idcliente, name:item.nombre+' '+ item.apellido}
    })
    }
    const ConvetirEmpanAData=(data)=>{
        return data.map((item)=>{
            return{id:item.idempleado, name:item.nombre+' '+ item.apellido}
        })
        }
        const ConvetirPagoAData=(data)=>{
          return data.map((item)=>{
              return{id:item.idtipopago, name:item.nombre}
          })
          }
        const Obtenercliente=(data,id)=>{
          for (let i in data){
            if(data[i].idcliente === id){
                return data[i];
            }
          }
           
        }
        const ObtenerEmpleado=(data,id)=>{
            for (let i in data){
              if(data[i].idempleado === id){
                  return data[i];
              }
            }
             
          }
          const ObtenerPlan=(data,id)=>{
            for (let i in data){
              if(data[i].idplan === id){
                  return data[i];
              }
            }
             
          }
          const ObtenerTipoPago=(data,id)=>{
            for (let i in data){
              if(data[i].idtipopago === id){
                  return data[i];
              }
            }
             
          }

const AplicarMora = (hoy, fechaPago) => {
  let dhoy=moment(hoy).subtract(Info.diasmora,'days').format("YYYY-MM-DD").split("-")
  let fpago=moment(fechaPago).format("YYYY-MM-DD").split("-")

  if(dhoy[0] >= fpago[0]){
    console.log("y")
    if(dhoy[1] >= fpago[1]){
      console.log("m")
      if(dhoy[2] >= fpago[2]){
        console.log("d")
        return true
      }
        return false
      
    }return false
     
    
  }
    return false
  
}

          const AplicarMoras=(hoy, fechaPago)=>{
            let dhoy=moment(hoy).subtract(Info.diasmora,'days').format("YYYY-MM-DD").split("-")
            let fpago=moment(fechaPago).format("YYYY-MM-DD").split("-")
            console.log(dhoy,fpago)
            if(dhoy[0] >= fpago[0]){
              console.log("y")
              if(dhoy[1] >= fpago[1]){
                console.log("m")
                if(dhoy[2] >= fpago[2]){
                  console.log("d")
                  return true
                }else{
                  return false
                }
              }else{
                return false
              }
            }else{
              return false
            }
          }

          const TotalIteres = (capital,porcenaje_interes,no_pagos) => {
      
            return  (Number(capital) * (Number (porcenaje_interes) / 100)) * Number (no_pagos)
          }
          const Totalfinal = (capital, totalInteres) => {
            return  capital + totalInteres
          }

export {ConvetirPlanAData, ConvetirClAData,ConvetirEmpanAData,ConvetirPagoAData, Obtenercliente,ObtenerPlan,ObtenerEmpleado,ObtenerTipoPago,AplicarMora,TotalIteres,Totalfinal};