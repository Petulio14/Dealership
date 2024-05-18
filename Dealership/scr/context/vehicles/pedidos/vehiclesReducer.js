export default (state, action) => {
    switch (action.type) {
      case 'SELECCIONAR_PRODUCTO':
        return {
          ...state,
          vehicle: action.payload
        };
      case 'CONFIRMAR_ORDENAR_VEHICLE':
        return {
          ...state,
          pedido: [...state.pedido, action.payload]
        };
      case 'MOSTRAR_RESUMEN':
        return {
          ...state,
          total: action.payload
        };
      case 'ELIMINAR_PRODUCTO':
        return {
          ...state,
          pedido: state.pedido.filter(articulo => articulo.id !== action.payload)
        };
      default:
        return state;
    }
  };