/*This file was created using the base rate function@(x)1/10+x*0and the cause functionsas well as the preventative functions@(x)exp(-x/4)at time3with parameter1,@(x)exp(-x/4)at time30with parameter1,@(x)exp(-x/4)at time40with parameter1,*/
 
 var dTimes=[3,30,40];
 var lightOrderP=[17,7,17,29,21,24,21,22,30,29,20,25,34,6,16,8,3,20,6,36,37,27,1,19,18,30,20,39,22,16,31,10,24,18,26,18,28,30,28,25,20,18,39,24,3,36,17,39,39,10,13,38,1,3,17,37,14,15,1,35,6,15,9,35,16,16,30,8,24,40,39,7,14,2,33,25,12,31,34,13,25,40,20,11,32,21,38,6,5,34,10,38,37,31,6,29,25,20,30,30,17,23,33,17,13,3,33,29,4,22,2,37,20,14,29,29,27,38,27,26,34,20,29,16,24,38,11,34,16,39,2,5,22,24,5,16,29,9,30,21,40,8,30,34,30,18,6,10,35,2,38,30,39,7,36,36,13,9,15,24,35,30,24,11,25,4,5,4,7,20,37,29,3,15,33,17,28,26,26,25,37,40,1,17,5,2,31,26,9,33,26,9,38,5,2,6,27,30,16,31,24,25,24,34,37,25,18,31,34,28,23,34,1]; 
 var eTimesP=[[0.12],[0.4],[0.42],[0.66],[0.78],[0.94],[0.96],[1.06],[1.3],[1.56],[1.6],[1.62],[2.04],[2.76],[2.8],[3],[4.36],[4.72],[5.26],[5.96],[6.04],[6.12],[6.36],[6.96],[7.56],[7.68],[7.76],[7.88],[8],[8.2],[8.48],[8.98,8.98],[9.02],[9.12],[9.22],[9.3],[10.22],[10.24],[10.4],[10.6],[11.06],[11.5],[12.02],[12.58],[12.62],[12.72],[12.94],[13],[13.16],[13.2],[13.26],[13.52],[14.08],[14.58,14.58],[14.64],[14.98],[15.16],[15.2],[15.3],[15.38],[15.52],[15.76],[16.12],[16.24,16.24],[16.3],[16.4],[16.44],[16.48],[16.52],[16.58],[17.2],[17.4],[17.76],[17.84],[17.94,17.94],[17.96],[18.04],[18.06],[18.72],[18.9],[18.96],[18.98],[19.22],[19.34],[19.36],[19.4],[19.48],[19.7],[19.82],[20.1],[20.18],[20.76],[20.8],[20.92],[21.1],[21.26],[21.34],[21.54],[21.74],[21.84],[21.94],[22.08],[22.42],[22.56],[22.9],[22.92],[23.26,23.26],[23.52],[23.56],[24.18],[24.34],[24.66],[24.68],[25.34],[25.48],[25.86],[26.02],[26.4],[26.44],[26.46],[26.82],[27.46],[27.6],[27.86],[28.02],[28.32],[28.76],[28.82],[29.34],[29.86],[32.88],[33.04],[34.06],[34.76],[35.4],[35.8],[36.92],[38.24],[38.5],[38.64],[38.86],[39.58],[39.6],[39.74],[40],[41.52],[42.04],[42.42],[43.08],[43.28],[43.4],[44.38],[44.46],[44.84],[45.8],[46],[46.82],[46.84],[47.56],[47.58],[47.9],[47.94],[48.44],[48.54,48.54],[48.68],[49.04],[49.12],[49.28],[49.42],[49.48],[49.7],[50.18],[50.38],[50.6],[50.76],[51.06],[51.16],[51.34],[51.38],[51.52],[51.7],[51.94],[52.56],[52.8],[54.4],[54.54],[54.74],[54.82],[54.86,54.86],[54.88],[55.06],[55.08],[56.18],[56.36],[56.38],[56.64],[57.2,57.2],[57.34],[58.16],[58.26],[58.54],[59.42],[59.52],[59.6],[100]];
 var lightOrderBR=[23,19,26,21,33,11,1,21,34,20,2,24,24,2,17,38,35,7,4,29,34,33,34,38,28,37,13,10,18,10,40,39,29,31,22,6,3,19,29,27,11,3,35,17,28,5,28,24,2,25,39,37,24,16,40,17,36,38,18,29,22,10,21,19,6,27,17,17,26,24,19,24,26,10,3,14,35,13,15,1,29,23,13,1,26,7,25,39,1,7,35,18,5,1,7,6,24,13,39,37,9,23,2,7,22,3,38,10,20,20,20,3,31,1,19,37,29,33,21,7,40,23,34,25,34,26,30,3,23,8,23,39,20,6,33,4,1,38,35,33,7,40,21,31,2,27,26,3,30,14,40,17,27,23,29,10,25,26,34,34,10,27,10,8,11,5,4,6,37,32,14,38,5,37,14,24,13,31,37,11,19,34,13,35,32,29,11,6,14,31,11,14,34,7,12,14,24,16,2,23,19,33,16,24,22,36,18,27,36,8,25,40,9,33,4,5,12,15,29,14,25,11,38,14,22,18,18,25,27,5,5,12,8,12,39,3,31,13,36,1,1,10,28,3,25,4,12,25,9,10,6,30,1]; 
 var eTimesBR=[[0.22],[0.44],[0.48],[0.58],[0.88],[1.1],[1.66,1.66],[1.74],[2.28],[2.38],[2.54],[2.76],[3.04],[3.54],[3.62],[3.7],[3.96],[4.12],[4.2],[4.28],[4.6],[5.04],[5.24],[5.8],[6.28],[6.54],[6.96],[7.12],[7.32],[7.5],[7.58],[7.76],[7.82],[7.92],[8.46],[8.66],[8.72],[8.76],[8.88],[8.94],[9.46],[9.6],[9.64],[10.18],[10.24],[10.28],[10.44],[10.52],[10.58],[10.7],[11.2],[11.38],[11.8],[11.82],[11.86],[12.96],[13.56],[14.24],[14.42],[14.96],[15.36],[15.48],[15.92],[16.08],[16.26],[16.3],[16.8],[16.96],[17.36],[17.72],[17.92],[18.2],[18.26],[18.28],[18.32],[18.76],[19.82],[19.92],[20.1],[20.16],[20.26],[20.76],[21.14],[21.32],[21.44],[21.6],[21.84],[22.06],[23.06],[23.86],[23.88],[23.9],[24.04],[24.16],[24.42],[24.58],[25],[25.14],[25.18],[25.46,25.46],[25.72],[26.06],[26.12],[26.76],[26.88],[27.06],[27.18],[27.22],[27.3],[27.38],[27.56],[27.64],[28.56],[28.72],[29],[29.04],[29.64],[29.74,29.74],[29.88],[30.14],[30.84],[30.86],[31.52],[31.58],[31.6],[32.34],[32.42],[32.6],[32.62],[32.86],[32.96],[33.06],[33.08],[33.14],[33.56],[33.72],[33.8],[34.02],[34.08],[34.34],[34.68],[34.88],[34.9],[35.08],[35.5],[35.72],[35.92],[35.94],[36.2],[37.04],[37.06],[37.6],[37.9],[38.24],[38.38],[38.52],[38.6],[39.16],[39.2],[39.56],[39.62],[40.28],[40.32],[40.88],[41.22],[41.26],[41.58],[41.64],[42.14],[42.42],[42.84],[42.92],[43.12],[43.26],[43.88],[44.3],[44.64],[44.74],[44.98],[45.06],[45.8],[45.9],[46.04],[46.26],[46.28],[46.34],[46.44],[46.66],[46.7],[46.72],[47.28],[47.48],[47.64],[47.72],[47.78],[48.02],[48.1],[48.24],[48.28],[48.42],[48.62],[48.64],[48.78],[48.82],[49.24],[49.66],[49.78,49.78],[49.86],[50.18],[50.34],[50.46],[50.76],[50.84],[51.24],[51.66],[51.96,51.96],[52.22],[52.24],[52.38],[52.48],[52.74],[52.86],[52.92],[52.94],[53.02],[54.32],[54.48],[54.92],[55.1],[55.16],[55.2],[56.08],[56.6,56.6],[56.62],[56.86],[57.8],[58.54],[58.62],[58.66],[58.8],[59.46],[59.5],[59.64],[59.66],[59.78],[59.96],[100]];