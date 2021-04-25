import menusReducer, { 
  addMenu
} from './menusSlice';

describe('menus reducer', () => {
  const initialState = {
    menus: [],
    status: 'idle',
    error: null
  };
  it('should handle initial state', () => {
    expect(menusReducer(undefined, { type: 'unknown' })).toEqual({
      menus: [],
      status: 'idle',
      error: null
    });
  });
});