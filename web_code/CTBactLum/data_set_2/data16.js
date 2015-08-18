/*This file was created using the base rate function@(x)1/10+x*0and the cause functionsas well as the preventative functions@(x)1/4*exp(-x/4)at time45with parameter1,*/
 
 var dTimes=[45];
 var lightOrderP=[10,11,1,35,22,7,23,10,9,5,13,9,15,31,3,39,18,21,31,17,39,20,9,32,22,25,23,30,34,1,33,28,29,5,8,17,33,39,32,27,22,3,4,22,19,24,34,22,23,14,1,6,15,2,25,7,5,40,3,3,35,19,29,25,34,3,11,39,38,35,40,11,33,29,13,26,28,15,16,3,6,38,17,34,8,20,39,10,35,22,24,8,31,2,14,21,31,2,12,10,12,21,36,7,29,32,38,36,31,25,4,8,21,32,14,35,38,18,23,30,38,5,33,26,17,12,4,14,12,13,20,12,22,35,13,1,31,5,21,28,18,7,19,34,20,36,28,6,5,24,21,2,2,20,34,35,15,18,30,21,18,39,24,12,7,30,37,22,8,20,19,11,39,15,13,22,8,7,21,39,16,19,32,7,20,4,8,31,28,37,22,31,34,5,2,7,1,17,34,3,35,24,36,15,7,15,10,40,34,2,1,31,33,6,10,17,19,8,34,2,24,16,30,12,31,28,17,5,34,30,37,23,33,37,12,18,31,34,11,1]; 
 var eTimesP=[[0.16],[0.24],[0.26],[0.32],[0.62],[0.64],[0.88],[1.2],[1.92],[2.26],[2.7],[2.84],[2.9],[3.02],[3.06],[3.18],[3.38],[3.9],[3.96],[4.08],[4.52],[5.34],[5.64],[6.04],[6.12],[6.3],[6.52],[6.84],[7.36],[7.76],[8.14],[8.68],[9.28],[9.34],[9.48],[9.76],[9.78],[9.9],[10.1],[10.32],[10.34],[11.22],[11.72],[12.32],[12.54],[12.9],[13.22],[13.46],[13.64],[14.18],[14.4],[14.68],[14.88],[14.96],[15.06],[15.1],[15.48],[15.76],[16.16],[16.4],[16.58],[16.88],[16.96],[17],[17.18],[17.7],[17.96],[18.32],[18.34],[18.46],[19.02],[19.14],[19.52],[19.74],[20.06],[20.46],[20.84],[20.98],[21],[21.7],[21.8],[22.08],[22.1],[22.14],[22.96],[23],[23.04],[23.22],[23.44],[23.68],[23.72],[23.8],[24.04],[24.06],[24.2],[24.3],[24.78],[24.9],[25],[25.3],[25.42,25.42],[25.9],[25.94],[26.08],[26.2],[26.8],[26.96],[26.98],[27.12],[27.68],[28.2],[28.32],[28.38],[28.58,28.58],[28.82],[28.84],[28.94],[29.1],[29.44],[29.9],[30.02],[30.54],[30.6],[31],[31.06],[31.14],[31.38,31.38],[31.44],[32.06],[32.08],[32.3],[32.42],[32.46],[32.9],[32.98],[33.08],[33.1],[33.2],[33.4],[33.74],[34.6],[34.84],[35.2],[35.56],[35.82],[36.5],[36.74],[37.14],[37.6],[37.66],[38.18],[38.34],[38.44],[38.58],[38.78],[38.9],[39.48],[39.54],[39.56],[39.58],[40.14],[40.58],[40.82,40.82],[41.08],[41.16],[41.44],[41.7],[41.82],[42.32],[42.38],[42.82,42.82],[42.84],[42.88],[42.92,42.92],[43.28],[43.5],[43.56],[43.72],[44.18],[44.88],[44.98],[45.6],[45.74],[45.8],[45.84],[46.3],[46.64],[46.88],[47.94],[48.52],[48.54],[48.88],[48.94],[49.46],[49.54],[49.58,49.58],[50.12],[50.52],[50.68],[50.92],[51],[51.18],[51.34],[51.36],[51.46],[51.5],[51.74],[51.82],[52.82],[53.02],[53.2],[53.6],[54.48,54.48],[55.38],[55.72],[55.88,55.88],[55.9],[56.76],[57.56],[57.98],[58.32],[58.5],[58.58],[59.04],[59.08],[59.1],[59.16],[59.34],[59.4],[59.58],[100]];
 var lightOrderBR=[14,37,22,1,33,29,29,25,37,32,24,5,28,35,36,29,19,34,18,1,5,22,3,24,29,7,13,16,20,21,16,29,34,17,10,30,13,22,8,25,18,5,23,28,6,12,14,37,23,9,12,24,38,28,18,35,24,16,8,39,10,9,8,3,36,24,40,15,27,26,11,14,34,31,31,36,15,7,29,24,7,12,24,29,37,15,39,4,27,27,37,37,18,27,17,15,26,11,16,25,33,36,26,6,34,9,30,17,30,10,28,4,3,18,22,9,9,2,6,27,1,33,19,6,28,28,15,23,19,8,22,8,14,5,25,24,20,12,8,29,17,40,13,19,10,10,9,22,30,12,40,30,16,36,26,40,36,29,33,3,12,16,10,25,38,20,39,17,12,31,32,1,23,12,30,31,35,13,34,29,3,7,8,12,35,40,15,16,34,2,10,9,35,36,18,11,16,6,5,30,8,22,36,19,12,26,22,4,30,30,20,3,11,13,3,9,12,40,4,33,27,4,8,8,19,30,24,31,35,21,9,34,15,6,22,11,26,3,37,40,36,37,33,23,22,14,24,2,20,6,8,10,18,25,15,16,19,4,18,37,36,34,29,33,12,2,8,34,17,29,22,11,12,8,1]; 
 var eTimesBR=[[0.18],[1.02],[1.04],[1.74,1.74],[1.78],[1.92],[2.36],[3.24],[3.5],[3.68],[3.74],[3.76],[3.86],[4.6],[4.86],[5.04],[5.2],[5.42],[5.82],[6.08],[6.24],[6.28],[6.88],[7.18],[7.22],[7.46],[7.74],[7.88],[8.1],[8.38],[8.6],[9.2],[9.22],[9.44],[9.62],[9.98],[10.08],[10.16],[10.24],[10.58],[10.68],[11.44],[11.62],[11.66],[12.4],[12.58],[12.62],[13.08],[13.62],[14.38],[14.48],[15.16],[15.78],[15.88],[16.14],[16.34],[16.44],[16.64],[16.76],[17.18],[17.24],[17.34],[17.52],[17.92],[18.12],[18.86],[18.94],[19.04],[19.14],[19.2],[19.48],[20.52],[20.74],[20.8],[21.2],[21.42],[21.5],[21.54],[21.58],[21.76,21.76],[21.98],[22.1],[22.16],[22.32],[22.38],[22.94],[23.02],[23.16],[23.2],[23.34],[23.66],[23.76],[24.48],[24.52],[24.94],[25.02],[25.1],[25.22],[25.52],[25.54],[25.58],[25.86],[26.24],[26.38],[26.52],[26.8],[26.84],[26.88],[27.16],[27.34],[27.48],[27.72],[28.36],[28.52,28.52],[28.68],[28.86],[28.92],[29.16],[29.18],[29.34],[29.6],[29.94],[30.1],[30.12],[30.26],[30.68],[31],[31.6],[31.9],[31.98],[32.1],[32.18],[32.24],[32.34],[32.6],[32.62],[32.66],[32.82],[32.92],[32.98],[33.18],[33.82],[34.08],[34.34],[34.4],[34.62],[34.64],[34.78],[34.88],[35.18],[35.28],[35.56],[35.8],[35.92],[35.96],[36],[36.18],[36.56],[36.82],[36.98],[37.06],[37.1],[37.44],[37.8],[37.86],[37.88],[38.1],[38.44],[38.56],[38.58],[38.64],[38.98],[39.18],[39.32],[39.38],[39.56],[39.8],[39.88],[39.94],[40.58,40.58],[41],[41.34],[42],[42.22],[42.48],[42.68],[42.74],[43.36],[43.38],[43.82],[44.18],[44.2],[44.26],[44.56],[44.64],[44.74],[44.82],[45.44],[46],[46.32],[46.5],[47.26],[47.4],[47.46],[47.7],[47.76],[48.06],[48.08],[48.14,48.14],[48.22],[48.46],[49.2],[49.22],[49.24],[49.62],[49.66],[50,50],[50.1],[50.16],[50.64],[50.78],[50.82],[50.9],[51.02],[51.14],[51.28],[51.36],[51.4],[51.48],[52.26],[52.54],[52.74],[52.9],[53.42],[53.46],[53.54],[53.58],[53.6],[53.82],[53.92],[53.94],[54.26],[54.3],[54.46],[54.6],[54.62],[54.82],[54.9],[54.94,54.94],[55.2],[55.22],[55.28],[55.44],[55.74],[56.24],[56.64],[56.86],[57.1],[57.24],[57.32],[57.58],[57.86],[58.06],[58.14],[59.42],[59.84],[59.86],[100]];