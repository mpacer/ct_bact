/*This file was created using the base rate function@(x)1/10+x*0and the cause functionsas well as the preventative functions@(x)exp(-x/4)at time10with parameter1,@(x)exp(-x/4)at time17with parameter1,*/
 
 var dTimes=[10,17];
 var lightOrderP=[17,22,26,26,32,29,6,30,6,28,15,21,2,4,19,2,32,17,22,14,31,38,18,31,17,21,36,1,38,6,8,23,37,31,12,16,4,18,35,28,2,16,36,39,40,38,19,9,15,6,9,8,36,39,28,17,32,14,21,25,20,1,18,31,9,21,23,16,21,26,9,37,17,11,20,22,34,21,10,30,8,31,15,28,16,26,18,32,14,29,33,38,2,24,10,23,8,27,13,12,17,28,23,9,27,4,2,36,6,35,11,35,33,14,8,8,38,39,37,6,3,28,29,24,16,37,28,9,29,27,23,29,12,12,6,9,10,12,38,19,36,14,2,19,10,22,23,6,14,5,29,18,12,39,13,37,5,14,23,20,22,9,25,12,26,11,25,26,29,24,2,31,31,33,23,33,4,21,9,6,24,5,5,16,26,15,16,14,4,10,10,6,17,6,36,35,4,21,19,17,3,33,1,11,26,39,27,24,8,31,3,25,22,13,25,5,33,40,28,30,1]; 
 var eTimesP=[[0.68],[1],[1.34],[1.4,1.4],[1.92],[2.24],[2.46],[2.68],[2.78],[3.6],[3.64],[3.76],[4.08],[4.28],[4.46],[4.78],[4.82],[4.88],[5.22],[5.68],[5.96],[6.2],[6.78],[7.08],[7.2],[7.62],[8.08],[8.4],[8.42],[8.46],[8.5],[8.86],[8.92],[9.48],[10.28],[11.48],[12.12],[12.74],[12.88],[13.3],[13.64],[13.72],[13.86],[14.62],[15.12],[15.74],[16.1],[18.6],[18.62],[19.06],[19.28],[19.6],[20.54],[20.58],[20.66],[21.14],[21.24],[21.92],[23.02],[23.16],[23.18],[23.38],[23.56],[23.68],[24.06],[24.22],[24.94],[25.42],[26],[27.02],[27.24],[27.26],[27.28],[27.62],[27.76],[28.24],[28.58],[28.9],[29.32],[29.42],[29.46],[29.76],[29.8],[30.16],[31.14],[31.18],[31.3],[31.64,31.64,31.64,31.64],[31.66],[31.96],[32.1],[32.26],[32.42],[33.26],[33.44],[33.76],[33.82],[34.06],[34.88],[35.08],[35.1],[35.32],[35.44],[35.86],[35.9],[35.94],[36.02],[36.34],[36.44],[36.6],[36.62],[36.68],[36.82],[37.56],[37.8],[38.06],[38.08],[38.32],[38.58],[38.88],[39.24],[39.3],[39.32],[39.44],[39.84],[40.36],[40.44],[40.58],[41.4],[42.2],[42.42,42.42],[42.64],[42.82],[43.06],[43.36],[43.5],[43.64],[43.68],[43.78],[43.94],[44.1],[44.48],[45.04],[45.34],[45.38],[45.6],[45.78],[45.8],[45.88],[45.98],[46.08],[46.1],[46.42],[46.54],[46.74],[47.06],[47.08],[47.28],[47.46],[47.5],[48.2],[48.22],[48.4],[48.42],[48.9],[49.24],[49.44],[49.54],[49.62],[49.78],[50.9],[50.92],[51],[51.1],[51.34],[51.46],[51.68],[51.72],[51.88],[52.12],[52.7],[52.78],[52.88],[53.42,53.42],[53.54],[53.72],[53.8],[53.92],[53.96],[54.14],[54.74],[54.98],[55.06],[55.1],[55.12],[55.34],[55.86],[56.14],[56.32],[56.36],[57.38],[57.56],[57.8],[57.96],[58.2],[58.58],[58.74],[58.94],[58.96],[59.08],[59.3],[59.46],[59.48],[59.7],[100]];
 var lightOrderBR=[23,24,19,9,30,19,19,25,35,7,7,39,3,37,8,21,32,23,14,37,3,2,22,8,4,14,4,2,39,39,40,25,30,24,18,40,16,15,35,40,24,22,14,18,34,32,39,16,34,21,21,39,39,40,22,18,1,16,12,21,10,33,1,1,26,2,13,3,29,19,4,23,36,3,2,23,5,21,7,37,29,11,23,1,20,25,31,11,6,18,19,2,12,28,7,33,34,20,32,20,14,15,23,7,5,24,29,24,13,11,27,6,24,22,9,29,21,25,33,8,1,5,12,11,4,25,30,14,26,39,40,16,40,19,22,29,35,23,9,17,11,25,19,27,3,34,34,16,12,36,33,37,33,1,10,40,24,36,11,38,22,28,29,11,6,9,31,14,25,19,4,27,12,39,18,28,36,17,17,17,4,37,15,32,5,5,20,1,17,22,21,22,22,8,10,9,14,16,27,3,34,31,34,18,31,4,10,37,3,8,14,13,18,6,34,28,24,14,39,5,2,4,1]; 
 var eTimesBR=[[0.28],[0.76],[1.28],[1.66],[2.2],[2.3],[2.38],[2.6],[3.08],[3.16],[3.42],[3.52],[3.62],[3.82],[3.98],[4.54],[4.62],[4.66],[4.68],[5.12],[5.22],[5.32],[5.42],[5.78],[5.92],[6.2],[6.52],[6.62],[6.7],[6.76],[6.88],[6.98],[7.42],[7.46],[7.7,7.7],[7.9],[8.18],[8.36],[8.76],[9.54],[9.56],[10.02],[10.24],[10.58],[11.12],[11.52],[11.6],[11.64],[12.3,12.3],[12.34],[12.62,12.62],[12.64],[13.06],[13.44],[13.62],[13.72],[14.04],[14.22],[14.28],[14.48],[14.66],[15.84],[16.04],[16.08],[16.14],[16.7],[16.8],[17.56],[17.74],[18.12],[18.28],[18.3],[18.38],[18.48],[18.5],[18.54],[18.74],[19.02],[19.04],[19.22],[19.32],[19.38],[19.4],[19.66],[19.7],[19.74],[19.78],[19.9],[20.58],[20.78],[21.18],[21.52,21.52],[22],[22.14],[22.22],[22.58],[22.66],[22.86],[22.96],[23.84],[24.06],[24.32],[24.86],[25],[25.06],[25.12],[25.16],[25.6],[25.76],[25.86],[26.26],[26.36],[26.68],[27.7],[28.32],[28.66],[29.2],[29.62],[29.76],[30.62],[30.72],[30.9],[31.54],[31.68],[31.74],[31.88],[32],[32.26],[33.22],[33.92],[34],[34.06],[34.32],[34.76],[34.78],[34.82],[35.44],[35.68],[35.76],[35.84],[36.6],[36.64],[36.98],[37.06],[37.08],[37.56],[37.58],[37.8],[37.9],[38.68],[39.72],[39.74],[39.8],[39.82],[40.38],[40.58],[40.6],[41.16],[41.34],[41.56],[41.76],[41.94],[42.1],[42.12],[42.18],[42.56],[43.9],[44.84],[44.86],[45.16],[45.38],[45.48],[45.54],[45.62],[45.98],[46.42],[46.48],[46.82],[47.22],[47.36],[47.6],[47.98],[48.7],[48.9],[49.64],[49.72],[49.8],[49.94],[50.26],[50.56],[51.24],[51.26],[52.36],[52.66],[52.82],[53.32],[53.52],[53.98],[54.96],[54.98],[55.18],[55.42],[55.56],[56.06],[56.54],[56.78],[57.1],[57.34],[57.92],[58.16],[58.36],[58.38],[58.56],[58.86],[59.4],[59.48],[59.7],[59.72],[100]];