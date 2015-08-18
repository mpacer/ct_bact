/*This file was created using the base rate function@(x)1/10+x*0and the cause functions@(x)1/4*exp(-x/4)at time10,@(x)1/4*exp(-x/4)at time17,as well as the preventative functions*/
 
 var dTimes=[10,17];
 var lightOrderP=[31,20,13,8,39,7,38,34,32,23,29,16,23,2,22,12,20,2,6,10,30,37,4,14,17,10,30,39,9,39,6,3,17,9,13,6,21,26,17,14,35,6,32,14,16,32,5,7,5,3,14,13,10,37,13,5,21,21,35,29,24,38,10,35,39,27,33,38,12,5,17,14,26,36,6,8,35,6,35,29,13,2,14,34,14,29,23,16,12,33,11,27,26,14,21,21,9,34,4,5,1,14,9,8,17,17,32,6,23,35,35,21,37,37,5,4,27,5,13,6,30,20,4,20,22,3,31,8,29,32,15,34,17,37,28,19,20,23,32,38,17,33,2,20,25,15,18,39,4,27,17,38,33,31,26,37,9,25,32,34,32,16,6,39,12,21,26,17,33,32,32,13,14,8,33,37,2,37,18,35,7,33,15,3,17,39,34,7,34,19,30,16,39,7,13,24,39,39,39,34,32,12,12,30,37,22,31,37,12,24,7,32,26,31,37,18,17,1,21,17,26,26,31,16,31,20,38,11,9,24,38,14,27,24,25,21,11,15,6,32,19,13,31,2,29,16,40,1,7,29,31,31,18,28,11,21,9,7,17,17,37,29,32,27,35,11,8,39,11,7,7,2,35,5,22,28,21,1,30,28,30,34,17,8,26,19,31,21,20,7,14,14,31,29,8,35,15,5,1,34,10,20,17,32,6,7,1]; 
 var eTimesP=[[0.04],[0.46],[0.6],[0.82],[1.04],[1.16],[1.22],[1.34],[1.54],[1.86,1.86],[2.84],[3.44],[3.46],[4.04],[4.3],[4.48],[4.5],[4.72],[4.9],[5.32],[5.44],[5.46],[5.48],[5.56],[5.94],[6],[6.48],[6.54],[6.86],[7.44],[7.46],[7.72],[7.94],[8.26],[8.36],[8.64],[9.22],[9.26],[9.62],[9.88],[10.02],[10.16],[10.24],[10.32,10.32],[10.42],[10.44],[10.48],[10.5],[10.56],[10.82],[10.98,10.98],[11.3],[11.34],[11.54],[11.6],[11.62],[11.64],[11.7],[12.02],[12.06,12.06],[12.1],[12.3],[12.32],[12.4],[12.54],[12.82],[12.94],[13.06],[13.24],[13.32],[13.54],[13.64],[13.66],[13.7],[13.74],[14.08],[14.3],[14.46,14.46],[14.62],[15.04,15.04],[15.28],[15.36],[15.46],[15.7],[15.86,15.86],[15.88],[15.94],[16.18],[16.3],[16.44],[16.68],[16.82],[17.08],[17.16],[17.24],[17.26],[17.28],[17.3,17.3],[17.32],[17.34],[17.36],[17.38],[17.42],[17.44,17.44],[17.68],[17.8],[17.86],[17.88],[17.94],[18.04],[18.18],[18.3],[18.78],[19.12],[19.48,19.48],[19.5],[19.54],[19.62],[19.7],[19.72],[19.96],[20],[20.08],[20.14],[20.3],[20.32,20.32],[20.36],[20.42],[20.6],[20.72],[20.8],[20.82],[20.98],[21],[21.26],[21.82,21.82],[21.86],[22.18],[22.28],[22.32],[22.48],[22.78],[23.06],[23.3],[23.32,23.32],[24],[24.06],[24.18],[24.24],[24.28],[24.44],[24.46,24.46],[24.72],[24.74,24.74],[24.76],[25.06],[25.22,25.22],[25.34],[25.52],[25.9],[26.02],[26.08],[26.26],[26.84],[27.34],[27.4],[27.86],[27.9],[28.22],[28.26],[28.34],[28.76],[28.78],[28.84],[29.76],[29.88],[30],[30.14],[30.24,30.24],[30.26],[30.46],[30.48],[30.54],[30.82],[31.16],[31.4],[31.64],[32.68],[33.62],[33.72],[33.76],[33.94],[34],[34.04],[34.7],[34.78],[34.88],[35.5],[35.74],[35.82],[36.04],[36.18],[36.24],[36.46],[36.56,36.56],[36.6],[36.74],[37.48],[37.72],[37.76],[38.18],[38.32],[38.54],[38.74],[38.76],[38.9],[39.08],[39.26],[39.86],[39.94],[40.02],[40.3],[40.5],[40.68],[40.72],[40.82],[40.88],[41.16],[41.5],[41.74],[42.92],[43.06],[43.46],[43.62],[44.02],[44.24],[44.88],[45.08],[45.58],[46.32],[46.76],[46.8],[46.86],[47.04],[47.34],[47.94],[48.04],[48.14],[48.16],[48.32],[48.72],[49.06],[49.18],[50.32],[51.78],[51.8],[51.82],[52.22],[52.86],[53.06],[53.16],[53.3],[53.56],[53.66],[53.78],[53.92,53.92],[54.04],[54.06],[54.18],[54.4],[54.56],[55.04],[55.06],[56.28],[57.28],[58.08],[58.1],[58.32],[58.34],[58.66],[58.74],[59.22],[59.28],[59.4],[59.64],[59.7],[59.86],[100]];
 var lightOrderBR=[12,8,18,11,36,32,26,39,40,5,37,7,37,14,23,32,31,6,11,27,25,14,40,9,1,26,11,15,25,30,26,40,11,10,34,10,14,8,39,34,36,25,16,15,3,1,23,23,6,19,13,14,18,23,10,30,4,31,7,27,30,9,36,31,4,10,39,23,20,36,30,32,1,18,30,9,24,22,6,14,13,24,5,26,16,14,4,22,37,10,13,19,12,17,38,5,9,6,20,27,35,6,33,9,36,10,16,6,1,15,3,10,22,4,28,20,19,36,21,15,30,27,37,15,9,14,20,10,14,21,34,28,40,24,10,11,9,37,4,30,4,24,27,23,26,25,23,32,8,30,23,7,25,8,30,8,29,24,22,24,34,30,14,33,22,14,3,35,33,5,36,22,12,26,36,16,22,11,38,6,7,5,17,5,33,34,17,20,16,32,6,20,18,17,6,36,30,20,26,1,9,10,11,25,29,17,23,28,36,29,31,13,25,11,15,20,35,6,40,5,24,13,38,12,5,34,25,22,3,33,6,16,36,22,38,26,1,26,17,10,10,30,14,33,21,15,21,27,27,2,13,7,34,38,40,37,5,11,1]; 
 var eTimesBR=[[0.2],[0.8],[0.96],[1.88],[1.94],[2.08],[2.1],[2.22],[2.52],[2.7],[2.8],[3.2],[3.34],[3.64,3.64],[4.22],[4.3],[4.68],[4.8],[4.88],[4.9],[5.7],[6.34],[6.7],[6.72],[6.98],[7.42],[7.72],[7.82],[7.84],[7.86],[8.38],[8.4],[8.74],[9.24],[9.26],[9.36],[9.58],[9.6],[9.86],[10.04],[10.2],[10.28],[10.46],[10.96],[11.16],[11.62],[12.1],[12.22],[12.6],[12.76],[13.12],[13.3,13.3],[13.4],[13.48],[13.58],[13.92],[14.14],[14.28,14.28],[14.34],[14.7],[15.12],[15.2],[15.62],[15.7],[15.98],[16.12],[16.4],[16.42],[16.64],[17.28],[17.92],[17.96],[18.12],[18.32],[18.36],[18.86],[19.08],[19.1],[19.14],[19.64],[20.32],[20.54],[20.58],[21.14,21.14],[21.16],[21.36],[21.6],[21.72],[21.9],[22.32],[22.4],[22.5],[22.7],[23.12],[23.34],[23.8],[24.14],[24.42],[25.36],[25.4],[25.64],[25.68],[25.84],[26.04],[26.92],[27.46],[27.62],[27.68,27.68],[28.14],[28.26],[28.44],[28.7],[28.84],[28.86],[29.04],[29.2],[29.42],[29.44],[29.96],[31.22],[31.56],[31.74],[32.14],[32.16],[32.36],[32.44],[32.86],[33.02],[33.04],[33.4],[33.46],[33.66],[33.86],[33.98],[34.04],[34.14,34.14],[34.2],[34.34,34.34],[34.58],[34.72],[34.82],[34.88],[35],[35.24],[35.48],[35.66],[35.82],[36.42],[36.7],[36.72],[37.12],[37.14],[37.42],[37.54],[37.56],[38.2],[38.22],[38.52],[38.62],[38.74],[38.78],[38.86],[38.9],[39.34],[39.36],[39.64,39.64],[39.66],[41.02,41.02],[41.5],[41.54],[41.7],[41.86],[43.04,43.04],[43.28],[43.86],[43.98],[44.08],[44.26],[44.28],[44.74],[44.86],[45.2],[45.24],[45.34],[45.62],[46.26],[46.38],[46.48],[46.98],[47],[47.08],[47.46],[47.54],[47.88],[47.92],[48.04],[48.26],[48.64],[49.24],[49.36],[49.94],[50.24],[50.3],[50.48],[50.58],[50.9],[51.12],[51.3],[51.38],[51.92],[51.94],[52.12],[52.2],[52.38],[52.46],[52.5],[52.9],[53.4],[53.96],[53.98],[54.14],[54.5],[54.7],[54.96],[55.12],[55.48],[55.54],[55.88],[56.42],[56.56],[56.76],[56.96],[57.76,57.76],[57.94],[57.98],[58.12],[58.44],[58.58],[58.66],[58.76],[58.82],[59.12],[59.54],[59.7],[59.82],[59.84],[59.96],[100]];