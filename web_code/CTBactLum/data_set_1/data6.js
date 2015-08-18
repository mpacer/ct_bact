/*This file was created using the base rate function@(x)1/10+x*0and the cause functions@(x)exp(-x)at time10,@(x)exp(-x)at time17,as well as the preventative functions*/
 
 var dTimes=[10,17];
 var lightOrderP=[6,24,25,24,11,12,14,18,6,1,11,2,36,18,9,18,25,16,21,30,35,36,5,12,17,28,40,1,27,33,2,28,36,17,33,3,23,34,11,22,37,5,10,15,24,35,1,22,36,17,22,18,27,34,34,28,18,12,6,33,27,5,39,33,36,32,7,31,2,34,32,33,17,32,7,2,28,33,21,32,9,6,3,27,21,10,18,7,32,25,16,1,33,12,30,38,9,24,28,10,22,40,13,33,9,23,20,28,37,37,5,4,5,16,11,14,27,21,25,40,9,19,25,29,30,32,36,4,25,27,5,29,22,28,11,26,2,12,19,34,30,12,25,6,24,4,13,18,32,28,32,5,26,34,1,26,22,32,7,27,4,32,7,21,20,17,19,27,21,33,17,38,37,4,28,38,30,32,14,40,6,31,24,34,17,13,34,20,9,29,39,23,22,37,23,38,2,23,38,18,4,15,30,27,16,2,38,29,36,31,26,24,39,34,24,26,27,39,25,10,36,40,38,21,3,1,33,13,30,20,23,3,26,21,8,22,11,6,28,13,28,17,4,12,6,29,30,14,13,40,29,3,24,28,1,6,7,24,7,37,13,16,33,32,39,9,30,28,20,38,6,15,20,3,38,33,10,35,11,28,8,22,6,25,22,9,22,13,22,17,40,27,15,26,1,39,40,18,1]; 
 var eTimesP=[[0.06],[0.1],[0.12],[1.04],[1.44],[1.74],[2.22,2.22],[2.86],[2.96],[3.22],[3.28],[3.38],[3.5],[3.8],[3.94],[4.08],[5.1],[5.16],[6.12],[6.2],[6.48],[6.8],[6.84],[7.02],[7.4],[7.52],[7.76],[7.94],[8.46],[8.5],[8.82],[9.3],[9.32],[9.64],[10.06,10.06],[10.08],[10.1,10.1,10.1],[10.12,10.12],[10.26,10.26,10.26],[10.28,10.28,10.28],[10.3],[10.36],[10.44,10.44,10.44],[10.48],[10.5],[10.52],[10.66],[10.68],[10.74],[10.8],[10.86],[10.88],[10.9],[11.4],[11.42],[11.62],[11.72],[11.74],[12.02],[12.08],[12.14],[12.22],[12.26],[12.44],[12.7],[12.74],[12.92],[12.94],[13.66],[13.9],[14],[14.02],[15.06],[15.42],[15.52],[15.64],[15.76],[16.72],[17.04],[17.06],[17.1,17.1],[17.12],[17.14],[17.16],[17.26],[17.28],[17.32],[17.36,17.36],[17.38],[17.4],[17.42],[17.5],[17.56],[17.68],[17.72,17.72,17.72],[17.76],[17.78],[17.86],[17.88],[17.9],[17.98],[18.02],[18.06,18.06],[18.08],[18.1],[18.14],[18.16],[18.28,18.28],[18.3],[18.36],[18.38,18.38],[18.4],[18.8,18.8],[18.9],[19],[19.06],[19.5],[19.56],[19.6],[19.62],[19.72],[19.78],[19.96],[20.06],[20.14],[20.26],[20.32],[20.46],[20.68],[20.82],[21.16],[21.22],[21.34],[21.5],[21.68],[21.7],[21.76],[22.18],[22.4],[22.56],[22.66],[22.86],[23.14],[23.86,23.86],[24.9],[25.08],[25.12],[25.22],[25.26],[25.42],[25.68],[25.76],[25.78],[26.24],[26.28],[26.38],[26.4],[26.54],[27.06],[27.34],[27.5],[28.44],[28.62],[29.68],[29.9],[29.98],[30.1],[30.22],[30.36],[30.46],[31.54],[31.94],[32.68],[32.72],[32.96],[33.14],[33.32,33.32,33.32],[33.62],[33.8],[33.84],[34.5],[35.36],[35.48],[36.06],[36.6],[36.74],[37],[37.08],[37.52],[37.58],[37.82],[38.12],[38.22],[38.4],[38.72],[38.84],[39.4],[39.48],[39.52],[39.86],[40],[40.36],[40.42],[41.02],[41.08],[41.6,41.6],[41.8],[41.9],[42],[42.42],[42.46],[42.52],[42.54],[42.56],[42.8],[43.14],[43.16],[43.86],[44.02],[44.1],[44.28],[45.1],[45.14],[45.18],[45.2],[45.48],[46.06],[46.28],[47.2],[47.54],[48.02],[48.24],[49.6,49.6],[49.78],[49.98],[50.16],[50.2],[50.36],[50.86],[51.38],[51.46],[51.52],[51.58],[51.66],[52.06],[52.24],[52.28],[52.32],[52.34],[52.72],[52.8],[53.1],[53.24],[53.3],[53.6],[53.84],[53.98],[54.98],[55.3],[55.44],[55.64],[55.8,55.8],[56.14],[56.7],[56.78],[56.92],[57.22],[57.36,57.36],[57.78],[57.86],[58.98],[59.78],[100]];
 var lightOrderBR=[10,37,23,6,2,19,4,35,7,17,23,40,11,31,16,2,8,14,27,21,37,32,34,9,38,8,30,6,20,35,21,34,12,36,21,14,22,21,18,15,34,10,28,38,15,13,37,29,24,20,25,27,29,12,25,40,10,21,6,20,22,36,22,33,9,20,26,27,7,1,11,11,20,5,34,7,11,36,25,2,26,18,25,31,24,25,37,25,13,27,32,38,34,4,23,16,9,17,5,36,13,10,40,26,12,27,36,33,11,21,31,27,21,21,31,24,9,9,38,39,27,9,19,32,24,26,4,17,32,21,15,15,9,24,35,21,32,35,7,33,4,35,25,8,14,28,9,10,39,26,8,21,27,28,34,21,4,15,3,7,7,40,20,14,5,12,15,27,25,7,3,3,3,6,32,14,38,1,31,6,15,4,5,16,28,7,1,20,31,25,18,10,1,23,30,12,3,33,40,22,4,27,35,18,18,19,7,12,4,35,8,12,19,39,28,13,23,6,16,17,32,35,29,7,22,33,12,24,10,36,19,3,12,15,2,13,31,7,29,2,30,18,22,40,17,22,35,5,22,40,33,27,9,22,4,24,37,12,21,40,34,12,1,30,36,22,23,16,33,8,18,9,1]; 
 var eTimesBR=[[0.28],[0.42],[0.7],[1],[1.42],[1.56],[1.74,1.74],[1.94],[2.04],[2.14],[2.66],[2.74],[2.82],[2.88],[3.24],[3.32],[3.42],[4.28],[4.88],[5.46],[5.6],[5.94],[5.96],[6.02],[7.74],[8.8],[9.6],[9.76],[9.82],[9.84],[9.96],[10.06],[10.86],[10.94],[11.12,11.12],[11.24],[11.3],[12.22],[12.36],[12.42],[12.54],[12.82],[13.54],[14],[14.12],[14.36],[14.52],[15.28],[15.3,15.3],[15.6],[15.62],[15.86],[16.12],[16.2],[16.78],[16.8],[16.86],[16.92],[17.34],[17.9],[18.16],[18.4],[18.54],[18.72],[19.68],[19.84],[20.24],[20.3],[20.68],[20.9],[21],[21.32],[21.52],[21.94],[22.08],[22.14],[22.58],[22.82],[23.64],[23.88],[23.92],[24.12],[24.22],[24.26],[24.34],[24.56],[24.62],[24.8],[24.84],[24.96],[25.06],[25.38],[25.58],[25.7],[25.72],[25.92],[25.94],[26.02],[26.12],[26.22],[26.26],[26.54],[26.72],[26.74],[26.9],[27.04],[27.58],[27.88],[27.94],[28.86],[29.3],[29.54],[29.62],[29.76],[30.26],[30.48],[30.8],[31.16],[31.24],[31.38],[31.62],[31.64],[31.66],[31.9],[32.1],[32.18],[32.26],[32.32],[32.82],[32.88],[32.92],[32.98],[33.1],[33.22],[33.58],[33.6],[33.66],[33.72],[33.96],[34.32],[34.48],[34.74],[35.02],[35.54],[35.62],[36.24],[36.78],[37.02],[37.06,37.06],[37.28],[37.66],[37.7],[37.98],[38.88],[38.94],[38.98],[39.26],[39.28],[39.86],[40.1],[40.32],[40.34],[40.6],[40.7],[40.76],[40.78],[40.82],[40.9],[41.1],[41.96,41.96],[42.08],[42.12],[42.2,42.2],[42.34],[42.46],[42.76],[42.8],[43.88],[43.98],[44.06],[44.4],[44.7],[44.86],[45.04],[45.26],[45.3],[45.5,45.5],[45.68],[46.06],[46.12],[46.3],[46.38],[46.46],[46.68,46.68],[46.86],[46.88],[47.1],[47.84],[48.02],[48.2],[48.54],[48.56],[48.62],[48.92],[48.96],[49.02],[49.04],[49.12],[49.46],[49.7],[49.74],[49.78],[49.84,49.84],[50.02],[50.28],[50.32],[50.58],[50.72],[51.08],[51.18,51.18],[51.5],[51.58],[51.72],[51.84],[51.94],[52.14],[52.26],[52.44],[53.18],[53.26,53.26],[53.42],[53.78],[54.26],[54.3,54.3],[54.54],[54.56],[54.74],[55.16],[55.34],[55.64],[55.72],[56.78],[56.8],[57.12],[57.14],[57.26],[57.4],[57.52],[57.54],[57.8],[57.86,57.86],[57.88],[58.24,58.24],[58.54],[58.78],[58.94],[59.36],[59.86],[100]];