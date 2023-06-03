const initialState = {};

const contentReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CUSTOMER':
      const userId = 1; // Replace with the actual user ID you want to associate the customer with
      return {
        ...state,
        [userId]: {
          ...state[userId],
          customers: [...(state[userId]?.customers || []), action.payload],
        },
      };
    case 'SET_SITE_REFERENCE':
      const siteRefUserId = 1; // Replace with the actual user ID you want to update the site reference for
      return {
        ...state,
        [siteRefUserId]: {
          ...state[siteRefUserId],
          siteReferences:  [...(state[siteRefUserId]?.siteReferences || []), action.payload],
        },
      };
      case 'ADD_ANOTHER_CUSTOMER':
        const addCustomerUserId = 1; // Replace with the actual user ID you want to associate the customer with
        return {
          ...state,
          [addCustomerUserId]: {
            ...state[addCustomerUserId],
            anotherCustomers: [...(state[addCustomerUserId]?.anotherCustomers || []), action.payload],
          },
        };
        case 'SET_CATEGORY':
          const cateUserId = 1; // Replace with the actual user ID you want to update the site reference for
          return {
            ...state,
            [cateUserId]: {
              ...state[cateUserId],
              selects :  [...(state[cateUserId]?.selects || []), action.payload],
            },
          };
    case 'SET_TYPE':
      return {
        ...state,
        [action.payload.userId]: {
          ...state[action.payload.userId],
          type: action.payload.type,
        },
      };
    case 'SET_DOCKET':
      const dockUserId = 1; // Replace with the actual user ID you want to update the site reference for
      return {
        ...state,
        [dockUserId]: {
          ...state[dockUserId],
          dockets:  [...(state[dockUserId]?.dockets || []), action.payload],
        },
      };
    case 'SET_WEIGHT':
      const weighUserId = 1; // Replace with the actual user ID you want to update the site reference for
      return {
        ...state,
        [weighUserId]: {
          ...state[weighUserId],
          weights :  [...(state[weighUserId]?.weights || []), action.payload],
        },
      };
     
    default:
      return state;
  }
};

export default contentReducer;
