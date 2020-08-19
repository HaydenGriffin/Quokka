import service from './src/service';
import io from './src/io';
import 'source-map-support/register';

export const hello = async (event, _context) => {
  const input = io.handler.input;
  console.log(input);
  const result = service.hello(event);
  return io.handler.returnSuccess(result);
};
