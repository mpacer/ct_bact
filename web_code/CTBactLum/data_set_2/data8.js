/*This file was created using the base rate function@(x)1/10+x*0and the cause functions@(x)1/4*exp(-x/4)at time45,as well as the preventative functions*/
 
 var dTimes=[45];
 var lightOrderP=[5,2,7,18,3,23,9,14,39,23,1,39,15,1,8,3,23,37,2,32,19,11,6,4,27,4,18,34,17,38,28,9,27,24,37,30,16,6,9,40,16,17,20,31,2,18,39,3,1,36,12,2,16,6,19,18,14,25,33,8,24,35,16,38,13,23,8,19,18,20,16,21,31,16,32,29,6,37,33,10,18,14,11,36,29,19,1,8,31,36,25,35,34,7,21,15,32,24,35,29,38,5,27,2,18,33,29,40,38,36,39,9,35,19,18,24,36,10,10,3,29,14,19,22,17,38,5,19,25,4,39,28,37,38,14,20,1,17,6,6,12,26,27,26,12,26,12,8,31,32,3,26,23,35,1,11,24,16,36,5,7,19,29,13,7,14,31,35,11,1,25,16,31,33,21,37,29,31,31,8,3,17,20,26,21,4,25,14,9,29,18,7,38,36,21,32,12,12,4,36,17,35,36,29,3,8,7,21,23,33,26,31,14,16,23,10,24,8,35,39,33,19,5,19,26,28,6,38,17,7,3,24,37,17,29,6,8,31,36,9,24,35,37,12,30,7,20,18,33,13,12,31,5,23,17,26,17,24,31,23,27,8,31,28,4,37,5,25,31,20,30,30,34,23,3,3,16,16,19,35,2,33,3,35,7,22,28,26,7,20,21,12,27,4,35,15,1]; 
 var eTimesP=[[0.42],[0.94],[1.4],[1.44],[1.62],[1.92],[3.08],[3.1],[3.12],[3.16],[3.44],[3.5],[3.58],[3.78],[4.16],[4.54],[4.58],[5.4],[5.48],[5.56],[5.68],[6],[6.28],[6.44],[6.46],[6.48],[6.78],[6.94],[7.36],[7.64],[7.66],[7.78,7.78],[7.9],[8.12],[8.32],[9.04],[9.24],[10.08],[11.7],[11.84],[12.26],[12.28],[12.54],[12.64],[12.68],[13.04],[13.28],[13.36],[13.64],[13.98],[14.08],[14.28],[14.46,14.46],[14.64],[14.8],[15.04],[15.66],[15.68],[15.9],[16.06],[16.46],[16.48],[16.62],[16.76],[16.86],[17.1],[17.2],[17.36],[17.44],[17.96],[18.46],[18.62,18.62],[18.92],[19.08],[19.14],[19.54],[20.4],[20.56],[20.62],[20.84],[21.26],[21.5],[21.64],[21.8,21.8],[22.08],[22.12],[22.56,22.56],[23.12],[23.3],[23.32],[23.36],[23.44],[24.26],[24.32],[24.36],[24.46],[25.64],[26.16],[26.44],[27.16],[27.2],[27.32],[27.48],[27.54],[27.6],[27.66],[27.8],[28.06],[28.08],[28.58],[28.64],[29.26],[29.46],[29.82],[30.06],[30.1],[30.38],[30.74],[30.76],[30.8],[30.94],[31.08],[31.44],[31.88],[32.02],[32.42],[32.44],[32.54],[32.74],[33.08],[33.3],[33.38],[33.42],[33.84],[35.5],[35.7],[35.74],[36.1],[36.12],[36.24],[36.3],[36.32],[36.76],[36.8,36.8],[37.18],[37.34],[37.4],[38.14],[38.26],[38.34],[38.42],[38.58],[38.94],[38.96],[39.76],[39.86],[40.08],[40.38],[40.74],[40.9],[41],[41.22],[41.58],[41.66],[41.72],[41.84],[42.32],[42.42],[42.46],[42.8],[43.06],[43.12],[43.32],[43.48],[43.6],[43.72],[43.78],[43.8],[43.82],[44.2],[44.78],[44.9],[45.16,45.16],[45.18],[45.32],[45.58],[45.6],[45.62,45.62],[45.66],[45.68],[45.82],[45.9],[45.92],[45.94],[46.08],[46.22],[46.36,46.36],[46.38],[46.4,46.4],[46.6],[46.84],[46.88],[46.96,46.96],[47.16],[47.28],[47.36],[47.42,47.42,47.42],[47.46],[47.48],[47.58,47.58],[47.74],[47.98],[48.14],[48.26],[48.28],[48.4],[48.84],[48.9],[49.02],[49.08],[49.12],[49.14],[49.5],[49.92,49.92],[50.08,50.08],[50.14],[50.3],[50.34],[50.58],[50.72,50.72],[50.96,50.96],[51.24],[51.42,51.42],[51.52],[51.96],[52.18],[52.32],[52.38],[52.7],[52.74],[52.86],[53.04],[53.34],[53.4],[53.44],[53.64,53.64],[53.92],[54.04],[54.26],[54.28],[54.5],[55.28,55.28],[55.32],[55.38],[55.48],[55.6],[55.68],[55.7],[56.08],[56.22],[56.56],[56.74,56.74],[56.76],[56.9,56.9],[57.34],[57.44],[58.14],[58.48],[58.7],[58.84],[59],[59.14],[59.98],[100]];
 var lightOrderBR=[11,23,24,13,35,37,32,28,27,35,17,28,40,38,18,19,9,29,31,9,10,37,7,34,38,19,26,9,37,14,12,5,34,3,19,12,2,16,6,38,3,35,11,6,40,9,31,32,35,2,19,3,30,37,14,18,1,19,3,12,39,4,28,23,20,36,16,30,28,24,26,39,15,4,19,22,40,12,24,21,12,21,20,29,6,16,14,39,12,3,33,4,1,19,11,21,9,6,26,1,38,32,23,2,19,19,19,28,32,36,10,4,11,20,34,15,3,16,15,17,33,20,37,24,1,23,23,2,6,20,2,14,4,6,20,19,40,5,34,1,24,36,14,7,31,5,34,40,8,36,19,15,30,21,19,11,21,32,5,1,6,29,40,32,2,25,12,16,28,29,35,5,5,15,5,26,21,7,12,27,2,18,16,25,8,18,19,13,17,12,22,30,33,39,19,17,13,18,7,13,36,9,17,27,9,19,5,11,29,21,28,24,27,19,14,37,25,7,19,32,18,27,11,31,22,9,11,17,20,34,15,22,27,5,4,30,3,36,6,24,2,35,39,19,11,35,6,32,5,21,9,4,18,16,25,31,38,31,25,11,23,31,14,14,36,34,39,33,1,13,26,2,21,8,9,13,19,29,19,27,2,7,26,1]; 
 var eTimesBR=[[0.38],[0.58],[0.76],[1.32],[1.66],[2],[2.16],[2.2],[2.26],[2.38],[2.46,2.46],[2.66],[2.72],[2.9],[3.12],[3.36,3.36],[3.38],[3.56],[3.86],[4.56],[4.6],[4.92],[4.96],[5.02],[5.08],[5.14],[5.28],[5.38],[5.68],[5.7],[5.74],[6],[6.06],[6.08],[6.46],[6.62],[6.64,6.64],[6.72,6.72],[7.1],[7.16],[7.66],[7.72],[7.96],[8.74],[8.78],[9.02,9.02],[9.74],[9.84],[9.96],[10.16],[10.66],[10.84],[10.86],[11],[11.28],[11.64],[11.72,11.72],[11.82],[11.92],[12],[12.18,12.18],[12.2],[12.32],[12.34],[12.36],[12.58],[12.66],[12.82],[12.84],[12.94],[12.96],[13.6],[13.96],[14.2],[14.4],[14.48,14.48],[14.56],[14.72],[14.94],[15],[15.5],[16.08],[16.14],[16.64],[16.98],[18.48],[18.54],[18.58],[18.6],[18.68],[18.82],[19.02],[19.14],[19.28],[19.36],[19.78],[20.08],[20.1],[20.28],[20.32],[20.72],[20.74],[20.78],[21.22],[21.82],[22.58],[22.6],[22.72],[23.1],[23.24],[23.48],[23.62],[23.88],[23.94],[24.08],[24.1],[24.46],[24.66,24.66],[24.72],[24.88],[24.94],[25],[25.16],[25.3],[25.46],[25.8],[26.14],[26.44],[26.5],[26.66],[26.98],[27.04,27.04],[27.22],[27.56],[27.58],[27.96],[28.02],[28.12],[28.26],[28.42],[28.44],[28.72],[28.82],[29.04],[29.52],[29.54],[29.62],[29.82],[29.98],[30.22],[30.34],[30.46],[30.74],[31.02],[31.08],[31.56],[31.84],[32.66],[32.8],[33.14],[33.22],[33.86],[34.1,34.1],[34.26],[34.3],[34.62],[34.76],[34.92],[35],[35.66],[36.12],[36.54],[36.66],[36.72],[36.84,36.84],[37],[37.02],[37.08],[37.3],[37.32],[37.4,37.4],[37.42],[37.64],[38.02],[38.28],[38.34],[38.38],[38.5],[39.46],[39.48],[39.5],[39.92],[40.08],[40.12],[40.16],[40.6],[40.78],[40.86],[42.16],[42.18],[42.24],[42.26],[42.44],[42.64],[42.72],[43.38],[44.58],[45.54],[45.64],[45.74],[46],[46.04],[46.06],[46.34],[46.4],[46.92],[47.1],[47.66,47.66],[47.7],[48.36],[48.72],[48.94],[49.54],[49.72],[49.86,49.86],[50.28],[50.66],[50.7],[51.22],[51.3],[51.84],[52.06],[52.54],[52.56],[52.66],[52.94],[53.42],[53.54],[53.58],[53.74,53.74],[53.98],[54.16],[54.18],[54.22],[54.26],[54.34],[54.48],[55.5],[55.84],[55.86],[55.88],[55.98],[56.02],[56.14],[56.62],[56.82],[56.98],[57.06],[57.1],[57.42],[57.9],[57.94],[58.38],[58.5],[58.58],[59.42],[59.48],[100]];