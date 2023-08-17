// Type definitions for KAPI
// Project: https://gitee.com/wefamily/kapi
// Definitions by: KAPI https://wefamily.gitee.io/kapi
declare namespace Analyze.prototype{
	// Analyze.prototype.addRadiationCircle.!0
	
	/**
	 * 
	 */
	interface AddRadiationCircle0 {
	}
}
declare namespace Analyze.prototype{
	// Analyze.prototype.addVisualField2D.!0
	
	/**
	 * 
	 */
	interface AddVisualField2D0 {
	}
}
declare namespace Analyze.prototype{
	// Analyze.prototype.addHeatmap2D.!1
	
	/**
	 * 
	 */
	interface AddHeatmap2D1 {
				
		/**
		 * 
		 */
		size : number;
	}
}
declare namespace Controller.prototype{
	// Controller.prototype.setTimeSimulate.!0
	
	/**
	 * 
	 */
	interface SetTimeSimulate0 {
	}
}
declare namespace Controller.prototype{
	// Controller.prototype.setSkyColorParam.!0
	
	/**
	 * 
	 */
	interface SetSkyColorParam0 {
	}
}
declare namespace Draw.prototype{
	// Draw.prototype.drawPolyline.!1
	
	/**
	 * 
	 */
	interface DrawPolyline1 {
				
		/**
		 * 
		 */
		isGraphic : boolean;
	}
}
declare namespace Draw.prototype{
	// Draw.prototype.drawDecal.!0
	
	/**
	 * 
	 */
	interface DrawDecal0 {
	}
}
declare namespace Marker.prototype{
	// Marker.prototype.update.!0
	
	/**
	 * 从历史的标注中找到该marker
	 */
	interface Update0 {
	}
}
declare namespace Scene.prototype{
	// Scene.prototype._initSetting.!1
	
	/**
	 * 
	 */
	interface _initSetting1 {
				
		/**
		 * 
		 */
		domId : string;
				
		/**
		 * 
		 */
		turnServerError : boolean;
				
		/**
		 * 
		 */
		syncServer : string;
				
		/**
		 * 
		 */
		keyboardEvents : boolean;
				
		/**
		 * 
		 */
		keyboardIgnoreList : /* Scene.options.keyboardIgnoreList */ any;
	}
}
declare interface Analyze {
		
	/**
	 * 
	 */
	new ();
		
	/**
	 * @api  viewFloor(floor: int, sync?: boolean) 查看楼层
	 * @name viewFloor
	 * @group Analyze
	 * @version 1.0.0
	 * @apiIgnore
	 * @description 查看楼层
	 * 
	 * @param floor 查看楼层
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let analyze = new kapi.Analyze()
	 *   // 配合 async
	 *   let info = await analyze.viewFloor(27)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "查看成功",
	 *      data: {}
	 *    }
	 * 
	 * @return Promise
	 * @param floor 
	 * @param sync 
	 * @return  
	 */
	viewFloor(floor : any, sync? : any): /* Analyze.prototype.+Promise */ any;
		
	/**
	 * @api  closeFloor(floor: int, sync?: boolean) 关闭查看楼层
	 * @name closeFloor
	 * @group Analyze
	 * @version 1.0.0
	 * @apiIgnore
	 * @description 关闭查看楼层
	 * 
	 * @param floor 需要关闭的楼层
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let analyze = new kapi.Analyze()
	 *   // 配合 async
	 *   let info = await analyze.closeFloor(27)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "切换成功",
	 *      data: {}
	 *    }
	 * @param floor 
	 * @param sync 
	 * @return  
	 */
	closeFloor(floor : any, sync? : any): /* Analyze.prototype.+Promise */ any;
		
	/**
	 * @api  toggleViewFloor(floor: int, sync?: boolean) 切换查看楼层
	 * @name toggleViewFloor
	 * @group Analyze
	 * @version 1.0.0
	 * @description 切换查看楼层
	 * 
	 * @param floor 查看楼层
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let analyze = new kapi.Analyze()
	 *   // 配合 async
	 *   let info = await analyze.toggleViewFloor(27)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "切换成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param floor 
	 * @param sync 
	 * @return  
	 */
	toggleViewFloor(floor : any, sync? : any): /* Analyze.prototype.+Promise */ any;
		
	/**
	 * @api  addMigrateMap(start: object, end: object, isGraphic: boolean, sync?: boolean) 添加迁徙图
	 * @name addMigrateMap
	 * @group Analyze
	 * @version 1.0.0
	 * @description 添加迁徙图
	 * 
	 * @param start 开始坐标参数
	 * @param start.x x参数
	 * @param start.y y参数
	 * @param start.z z参数
	 * @param end 开始坐标参数
	 * @param end.x x参数
	 * @param end.y y参数
	 * @param end.z z参数
	 * @param isGraphic 是否是地理坐标（否为投影坐标）
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let analyze = new kapi.Analyze()
	 *   let start = {
	 *       x: 511128,
	 *       y: 4056989,
	 *       z: 85,
	 *   };
	 *   let end = {
	 *       x: 510876,
	 *       y: 4056882,
	 *       z: 85,
	 *   };
	 *   // 配合 async
	 *   let migrateMap = await analyze.addMigrateMap(start,end,false)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "添加迁徙图完成",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param start 
	 * @param end 
	 * @param isGraphic 
	 * @param sync 
	 * @return  
	 */
	addMigrateMap(start : any, end : any, isGraphic : any, sync? : any): /* Analyze.prototype.+Promise */ any;
		
	/**
	 * @api  removeMigrateMap(id: string, sync?: boolean) 删除迁徙图
	 * @name removeMigrateMap
	 * @group Analyze
	 * @version 1.0.0
	 * @description 删除迁徙图
	 * 
	 * @param id 迁徙图的id
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let analyze = new kapi.Analyze()
	 *   let id="BP_migrate";
	 *   // 配合 async
	 *   let migrateMap = await analyze.removeMigrateMap(id)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "删除迁徙图完成",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param id 
	 * @param sync 
	 * @return  
	 */
	removeMigrateMap(id : any, sync? : any): /* Analyze.prototype.+Promise */ any;
		
	/**
	 * @api  addStrategicMap(start: object, end: object, isGraphic: boolean, sync?: boolean) 添加战略图
	 * @name addStrategicMap
	 * @group Analyze
	 * @version 1.0.0
	 * @description 添加战略图
	 * 
	 * @param start 开始坐标参数
	 * @param start.x x参数
	 * @param start.y y参数
	 * @param start.z z参数
	 * @param end 开始坐标参数
	 * @param end.x x参数
	 * @param end.y y参数
	 * @param end.z z参数
	 * @param isGraphic 是否是地理坐标（否为投影坐标）
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let analyze = new kapi.Analyze()
	 *   let start = {
	 *       x: 511128,
	 *       y: 4056989,
	 *       z: 85,
	 *   };
	 *   let end = {
	 *       x: 510876,
	 *       y: 4056882,
	 *       z: 85,
	 *   };
	 *   // 配合 async
	 *   let StrategicMap = await analyze.addStrategicMap(start,end,false)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "添加战略图完成",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param start 
	 * @param end 
	 * @param isGraphic 
	 * @param sync 
	 * @return  
	 */
	addStrategicMap(start : any, end : any, isGraphic : any, sync? : any): /* Analyze.prototype.+Promise */ any;
		
	/**
	 * @api  removeStrategicMap(id: string, sync?: boolean) 删除战略图
	 * @name removeStrategicMap
	 * @group Analyze
	 * @version 1.0.0
	 * @description 删除战略图
	 * 
	 * @param id 战略图的id
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let analyze = new kapi.Analyze()
	 *   let id = "BP_migrate";
	 *   // 配合 async
	 *   let StrategicMap = await analyze.removeStrategicMap(id)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "删除战略图完成",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param id 
	 * @param sync 
	 * @return  
	 */
	removeStrategicMap(id : any, sync? : any): /* Analyze.prototype.+Promise */ any;
		
	/**
	 * @api  addRadiationCircle(option: object, sync?: boolean) 添加辐射圈
	 * @name addRadiationCircle
	 * @group Analyze
	 * @version 1.0.0
	 * @description 添加辐射圈
	 * 
	 * @param option 添加辐射圈参数
	 * @param option.radius 绘制辐射圈的半径
	 * @param option.isGraphic 空间参数
	 * @param option.location 绘制辐射圈圆心坐标
	 * @param option.location.x 绘制辐射圈圆心坐标x
	 * @param option.location.y 绘制辐射圈圆心坐标y
	 * @param option.location.z 绘制辐射圈圆心坐标z
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let analyze = new kapi.Analyze()
	 *   let option = {
	 *     isGraphic: false,
	 *     radius: 200,
	 *     location:{
	 *       x:511128,
	 *       y:4056989,
	 *       z:85,
	 *     }
	 *   }
	 *   let pathInfo = await analyze.addRadiationCircle(option)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param option 
	 * @param sync 
	 * @return  
	 */
	addRadiationCircle(option : Analyze.prototype.AddRadiationCircle0, sync? : any): /* Analyze.prototype.+Promise */ any;
		
	/**
	 * @api  removeRadiationCircle(id: string, sync?: boolean) 删除辐射圈
	 * @name removeRadiationCircle
	 * @group Analyze
	 * @version 1.0.0
	 * @description 删除辐射圈
	 * 
	 * @param id 辐射圈识别名称
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let analyze = new kapi.Analyze()
	 *   let id="1"
	 *   // 配合 async
	 *   let lightflow = await analyze.removeRadiationCircle(id)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "删除辐射圈成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param id 
	 * @param sync 
	 * @return  
	 */
	removeCircularContour(id : any, sync? : any): /* Analyze.prototype.+Promise */ any;
		
	/**
	 * @api  addHighLight(id: string, sync?: boolean) 开启物理高亮
	 * @name addHighLight
	 * @group Analyze
	 * @version 1.0.0
	 * @description 开启物理高亮
	 * 
	 * @param id 高亮类型
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let analyze = new kapi.Analyze()
	 *   let id = "test"
	 *   // 配合 async
	 *   let highlight = await analyze.addHighLight(id)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "开启物理高亮成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param id 
	 * @param sync 
	 * @return  
	 */
	addHighLight(id : any, sync? : any): /* Analyze.prototype.+Promise */ any;
		
	/**
	 * @api  removeHighLight(id: string, sync?: boolean) 关闭物理高亮
	 * @name removeHighLight
	 * @group Analyze
	 * @version 1.0.0
	 * @description 关闭物理高亮
	 * 
	 * @param id 高亮类型
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let analyze = new kapi.Analyze()
	 *   let id = "test"
	 *   // 配合 async
	 *   let highlight = await analyze.removeHighLight(id)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "关闭物理高亮成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param id 
	 * @param sync 
	 * @return  
	 */
	removeHighLight(id : any, sync? : any): /* Analyze.prototype.+Promise */ any;
		
	/**
	 * @api  addVisualField2D(option: object, sync?: boolean) 添加2D平面可视域
	 * @name addVisualField2D
	 * @group Analyze
	 * @version 1.0.0
	 * @description 添加2D平面可视域
	 * 
	 * @param option 添加2D平面可视域参数
	 * @param option.distance 绘制2D平面可视域的距离【单位：M】
	 * @param option.isGraphic 空间参数【默认接收地理坐标，指定isGraphic为false时，认为接收投影坐标，示例为投影坐标】
	 * @param option.angle 绘制2D平面可视域可视域的角度大小【单位：°】
	 * @param option.location 绘制2D平面可视域坐标
	 * @param option.location.x 绘制2D平面可视域坐标x
	 * @param option.location.y 绘制2D平面可视域坐标y
	 * @param option.location.z 绘制2D平面可视域坐标z
	 * @param option.rotation 绘制2D平面可视域姿态
	 * @param option.rotation.z 绘制2D平面可视域姿态Z【默认朝向北方，修改z轴方向可平行于地面旋转】
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let analyze = new kapi.Analyze()
	 *   let option = {
	 *     isGraphic: false,
	 *     distance: 2000,
	 *     angle:120,
	 *     location:{
	 *       x:511128,
	 *       y:4056989,
	 *       z:85,
	 *     },
	 *     rotation:{
	 *       z:0,
	 *     }
	 *   }
	 *   let pathInfo = await analyze.addVisualField2D(option)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param option 
	 * @param sync 
	 * @return  
	 */
	addVisualField2D(option : Analyze.prototype.AddVisualField2D0, sync? : any): /* Analyze.prototype.+Promise */ any;
		
	/**
	 * @api  removeVisualField2D(sync?: boolean) 关闭2D平面可视域
	 * @name removeVisualField2D
	 * @group Analyze
	 * @version 1.0.0
	 * @description 关闭2D平面可视域
	 * 
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let analyze = new kapi.Analyze()
	 *   let pathInfo = await analyze.removeVisualField2D()
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param sync 
	 * @return  
	 */
	removeVisualField2D(sync? : any): /* Analyze.prototype.+Promise */ any;
		
	/**
	 * @api  openSectioning(sync?: boolean) 开始地面剖切
	 * @name openSectioning
	 * @group Analyze
	 * @version 1.0.0
	 * @description 开始地面剖切
	 * 
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let analyze = new kapi.Analyze()
	 *   let pathInfo = await analyze.openSectioning()
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param sync 
	 * @return  
	 */
	openSectioning(sync? : any): /* Analyze.prototype.+Promise */ any;
		
	/**
	 * @api  closeSectioning(sync?: boolean) 关闭地面剖切
	 * @name closeSectioning
	 * @group Analyze
	 * @version 1.0.0
	 * @description 关闭地面剖切【开启地面剖切后，相机会自动移至设定的位置，同时关闭鼠标左键的相机平移功能，此时左键点击剖切面可以对剖切面进行移动】
	 * 
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let analyze = new kapi.Analyze()
	 *   let pathInfo = await analyze.closeSectioning()
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param sync 
	 * @return  
	 */
	closeSectioning(sync? : any): /* Analyze.prototype.+Promise */ any;
		
	/**
	 * @api  addHeatmap2D(heatmapArray: array, option: object, sync?: boolean) 二维热力图
	 * @name addHeatmap2D
	 * @group Analyze
	 * @version 1.0.0
	 * @description 二维热力图
	 * 
	 * @param heatmapArray 热力信息
	 * @param option.strength 热力渲染强度调节参数【建议1-5】
	 * @param option.size 热力渲染范围调节参数【建议1-5】
	 * @param option.high 热力渲染图高度调节参数【单位：米】
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let analyze = new kapi.Analyze()
	 *   let hearinfo = [{lng:114.48080809,lat:38.04440706,cnt:20},
	 *               {lng:114.47902883,lat:38.04356116,cnt:100},
	 *               {lng:114.47589874,lat:38.0438018,cnt:60},
	 *               {lng:114.47306132,lat:38.04456011,cnt:86},
	 *               {lng:114.47184694,lat:38.04367579,cnt:38}]
	 *    let option = {
	 *     strength: 5,
	 *     size: 1,
	 *     high:5
	 *   }
	 * 
	 *   let res = await analyze.addHeatmap2D(heatmapArray,option)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "开始绘制热力图",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param heatmapArray 
	 * @param option 
	 * @param sync 
	 * @return  
	 */
	addHeatmap2D(heatmapArray : any, option : Analyze.prototype.AddHeatmap2D1, sync? : any): /* Analyze.prototype.+Promise */ any;
		
	/**
	 * @api  removeHeatmap2D(sync?: boolean) 关闭二维热力图
	 * @name removeHeatmap2D
	 * @group Analyze
	 * @version 1.0.0
	 * @description 关闭二维热力图
	 * 
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let analyze = new kapi.Analyze()
	 * 
	 *   let res = await analyze.removeHeatmap2D()
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "关闭绘制热力图",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param sync 
	 * @return  
	 */
	removeHeatmap2D(sync? : any): /* Analyze.prototype.+Promise */ any;
		
	/**
	 * @api  addWaterElectricityAlarm(option: object, sync?: boolean) 添加水电告警
	 * @name addWaterElectricityAlarm
	 * @group Analyze
	 * @version 1.0.0
	 * @description 水电告警,点击监听【wiget-water&elect】
	 * 
	 * @param option 水电告警参数
	 * @param option.id 水电告警ID参数【对应具体建筑的ID】
	 * @param option.num 水电告警数值参数【归一化后的数据，范围0-1,数值越小，表示剩余水电量越少，渲染颜色越深】
	 * @param option.type 水电告警类型参数【'water' or 'electricity' 两种】
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let analyze = new kapi.Analyze()
	 *   let option={
	 *     id:'ed234',
	 *     num:123,
	 *     type:'electricity'
	 *   }
	 *   // 配合 async
	 *   let WE = await analyze.addWaterElectricityAlarm(option)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "开启水电告警成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param option 
	 * @param sync 
	 * @return  
	 */
	addWaterElectricityAlarm(option : any, sync? : any): /* Analyze.prototype.+Promise */ any;
		
	/**
	 * @api  removeWaterElectricityAlarm(sync?: boolean) 移除水电告警
	 * @name removeWaterElectricityAlarm
	 * @group Analyze
	 * @version 1.0.0
	 * @description 关闭所有水电告警交互渲染效果
	 * 
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let analyze = new kapi.Analyze()
	 *   let highlight = await analyze.removeWaterElectricityAlarm()
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "关闭水电告警成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param sync 
	 * @return  
	 */
	removeWaterElectricityAlarm(sync? : any): /* Analyze.prototype.+Promise */ any;
		
	/**
	 * @api  openBuildingDismantling(sync?: boolean) 开启楼宇拆解
	 * @name openBuildingDismantling
	 * @group Analyze
	 * @version 1.0.0
	 * @description 开启楼宇拆解
	 * 
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let analyze = new kapi.Analyze()
	 *   let open = await analyze.openBuildingDismantling()
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "开启楼宇拆解",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param sync 
	 * @return  
	 */
	openBuildingDismantling(sync? : any): /* Analyze.prototype.+Promise */ any;
		
	/**
	 * @api  closeBuildingDismantling(sync?: boolean) 关闭楼宇拆解
	 * @name closeBuildingDismantling
	 * @group Analyze
	 * @version 1.0.0
	 * @description 关闭楼宇拆解
	 * 
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let analyze = new kapi.Analyze()
	 *   let open = await analyze.closeBuildingDismantling()
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "关闭楼宇拆解",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param sync 
	 * @return  
	 */
	closeBuildingDismantling(sync? : any): /* Analyze.prototype.+Promise */ any;
}
declare var Analyze: Analyze;

/**
 * 
 */
declare interface Animation {
		
	/**
	 * 
	 */
	new ();
		
	/**
	 * @api  openLiftAnimation() 打开电梯动画
	 * @name openLiftAnimation
	 * @group Animation
	 * @version 1.0.0
	 * @description 打开电梯动画
	 * 
	 * @example {js} 使用示例:
	 *   let animation = new kapi.Animation();
	 *   // 配合 async
	 *   let info = await animation.openLiftAnimation()
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "打开成功",
	 *      data: {},
	 *      timestamp: 1640313429121
	 *    }
	 * @return  
	 */
	openLiftAnimation(): /* Animation.prototype.+Promise */ any;
		
	/**
	 * @api  closeLiftAnimation() 关闭电梯动画
	 * @name closeLiftAnimation
	 * @group Animation
	 * @version 1.0.0
	 * @description 关闭电梯动画
	 * 
	 * @example {js} 使用示例:
	 *   let animation = new kapi.Animation();
	 *   // 配合 async
	 *   let info = await animation.closeLiftAnimation()
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "关闭成功",
	 *      data: {},
	 *      timestamp: 1640313429121
	 *    }
	 * @return  
	 */
	closeLiftAnimation(): /* Animation.prototype.+Promise */ any;
}
declare var Animation: Animation;

/**
 * 
 */
declare interface Coord {
		
	/**
	 * 
	 */
	new ();
		
	/**
	 * @api  ecefToEngine(x: float, y: float, z: float) 地心地固转引擎
	 * @name ecefToEngine
	 * @group Coord
	 * @version 1.0.0
	 * @description 地心地固坐标系(地心坐标系)转换为引擎坐标
	 * 
	 * @param x x坐标
	 * @param y y坐标
	 * @param z z坐标
	 * 
	 * @example 使用示例
	 *   let coord = new kapi.Coord()
	 *   let x = 510853.156, y = 4057258.500, z = 0.000
	 *   // 配合 async
	 *   let coordInfo = await coord.ecefToEngine(x, y, z)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param x 
	 * @param y 
	 * @param z 
	 * @return  
	 */
	ecefToEngine(x : any, y : any, z : any): /* Coord.prototype.+Promise */ any;
		
	/**
	 * @api  ecefToProjection(x: float, y: float, z: float) 地心地固转投影
	 * @name ecefToProjection
	 * @group Coord
	 * @version 1.0.0
	 * @description 地心地固坐标系(地心坐标系)转换为投影
	 * 
	 * @param x x坐标
	 * @param y y坐标
	 * @param z z坐标
	 * 
	 * @example 使用示例
	 *   let coord = new kapi.Coord()
	 *   let x = 510853.156, y = 4057258.500, z = 0.000
	 *   // 配合 async
	 *   let coordInfo = await coord.ecefToProjection(x, y, z)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param x 
	 * @param y 
	 * @param z 
	 * @return  
	 */
	ecefToProjection(x : any, y : any, z : any): /* Coord.prototype.+Promise */ any;
		
	/**
	 * @api  ecefToGeographic(x: float, y: float, z: float) 地心地固转地理
	 * @name ecefToGeographic
	 * @group Coord
	 * @version 1.0.0
	 * @description 地心地固坐标系(地心坐标系)转换为地理坐标
	 * 
	 * @param x x坐标
	 * @param y y坐标
	 * @param z z坐标
	 * 
	 * @example 使用示例
	 *   let coord = new kapi.Coord()
	 *   let x = 510853.156, y = 4057258.500, z = 0.000
	 *   // 配合 async
	 *   let coordInfo = await coord.ecefToGeographic(x, y, z)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param x 
	 * @param y 
	 * @param z 
	 * @return  
	 */
	ecefToGeographic(x : any, y : any, z : any): /* Coord.prototype.+Promise */ any;
		
	/**
	 * @api  projectionToECEF(x: float, y: float, z: float) 投影转地心地固
	 * @name projectionToECEF
	 * @group Coord
	 * @version 1.0.0
	 * @description 投影坐标转地心地固坐标系(地心坐标系)
	 * 
	 * @param x x坐标
	 * @param y y坐标
	 * @param z z坐标
	 * 
	 * @example 使用示例
	 *   let coord = new kapi.Coord()
	 *   let x = 510853.156, y = 4057258.500, z = 0.000
	 *   // 配合 async
	 *   let coordInfo = await coord.projectionToECEF(x, y, z)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param x 
	 * @param y 
	 * @param z 
	 * @return  
	 */
	projectionToECEF(x : any, y : any, z : any): /* Coord.prototype.+Promise */ any;
		
	/**
	 * @api  projectionToGeographic(x: float, y: float, z: float) 投影转地理
	 * @name projectionToGeographic
	 * @group Coord
	 * @version 1.0.0
	 * @description 投影转地理
	 * 
	 * @param x x坐标
	 * @param y y坐标
	 * @param z z坐标
	 * 
	 * @example 使用示例
	 *   let coord = new kapi.Coord()
	 *   let x = 510853.156, y = 4057258.500, z = 0.000
	 *   // 配合 async
	 *   let coordInfo = await coord.projectionToGeographic(x, y, z)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param x 
	 * @param y 
	 * @param z 
	 * @return  
	 */
	projectionToGeographic(x : any, y : any, z : any): /* Coord.prototype.+Promise */ any;
		
	/**
	 * @api  projectionToEngine(x: float, y: float, z: float) 投影转引擎
	 * @name projectionToEngine
	 * @group Coord
	 * @version 1.0.0
	 * @description 投影转引擎
	 * 
	 * @param x x坐标
	 * @param y y坐标
	 * @param z z坐标
	 * 
	 * @example 使用示例
	 *   let coord = new kapi.Coord()
	 *   let x = 510853.156, y = 4057258.500, z = 0.000
	 *   // 配合 async
	 *   let coordInfo = await coord.projectionToEngine(x, y, z)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param x 
	 * @param y 
	 * @param z 
	 * @return  
	 */
	projectionToEngine(x : any, y : any, z : any): /* Coord.prototype.+Promise */ any;
		
	/**
	 * @api  engineToProjection(x: float, y: float, z: float) 引擎转投影
	 * @name engineToProjection
	 * @group Coord
	 * @version 1.0.0
	 * @description 引擎转投影
	 * 
	 * @param x x坐标
	 * @param y y坐标
	 * @param z z坐标
	 * 
	 * @example 使用示例
	 *   let coord = new kapi.Coord()
	 *   let x = 510853.156, y = 4057258.500, z = 0.000
	 *   // 配合 async
	 *   let coordInfo = await coord.engineToProjection(x, y, z)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param x 
	 * @param y 
	 * @param z 
	 * @return  
	 */
	engineToProjection(x : any, y : any, z : any): /* Coord.prototype.+Promise */ any;
		
	/**
	 * @api  engineToGeographic(x: float, y: float, z: float) 引擎转地理
	 * @name engineToGeographic
	 * @group Coord
	 * @version 1.0.0
	 * @description 引擎转地理
	 * 
	 * @param x x坐标
	 * @param y y坐标
	 * @param z z坐标
	 * 
	 * @example 使用示例
	 *   let coord = new kapi.Coord()
	 *   let x = 510853.156, y = 4057258.500, z = 0.000
	 *   // 配合 async
	 *   let coordInfo = await coord.engineToGeographic(x, y, z)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param x 
	 * @param y 
	 * @param z 
	 * @return  
	 */
	engineToGeographic(x : any, y : any, z : any): /* Coord.prototype.+Promise */ any;
		
	/**
	 * @api  engineToECEF(x: float, y: float, z: float) 引擎转投影
	 * @name engineToECEF
	 * @group Coord
	 * @version 1.0.0
	 * @description 引擎转投影
	 * 
	 * @param x x坐标
	 * @param y y坐标
	 * @param z z坐标
	 * 
	 * @example 使用示例
	 *   let coord = new kapi.Coord()
	 *   let x = 510853.156, y = 4057258.500, z = 0.000
	 *   // 配合 async
	 *   let coordInfo = await coord.engineToECEF(x, y, z)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param x 
	 * @param y 
	 * @param z 
	 * @return  
	 */
	engineToECEF(x : any, y : any, z : any): /* Coord.prototype.+Promise */ any;
		
	/**
	 * @api  geographicToECEF(x: float, y: float, z: float) 地理转地心地固
	 * @name geographicToECEF
	 * @group Coord
	 * @version 1.0.0
	 * @description 地理转地心地固
	 * 
	 * @param x x坐标
	 * @param y y坐标
	 * @param z z坐标
	 * 
	 * @example 使用示例
	 *   let coord = new kapi.Coord()
	 *   let x = 510853.156, y = 4057258.500, z = 0.000
	 *   // 配合 async
	 *   let coordInfo = await coord.geographicToECEF(x, y, z)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param x 
	 * @param y 
	 * @param z 
	 * @return  
	 */
	geographicToECEF(x : any, y : any, z : any): /* Coord.prototype.+Promise */ any;
		
	/**
	 * @api  geographicToProjection(x: float, y: float, z: float) 地理转投影
	 * @name geographicToProjection
	 * @group Coord
	 * @version 1.0.0
	 * @description 地理转投影
	 * 
	 * @param x x坐标
	 * @param y y坐标
	 * @param z z坐标
	 * 
	 * @example 使用示例
	 *   let coord = new kapi.Coord()
	 *   let x = 510853.156, y = 4057258.500, z = 0.000
	 *   // 配合 async
	 *   let coordInfo = await coord.geographicToProjection(x, y, z)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param x 
	 * @param y 
	 * @param z 
	 * @return  
	 */
	geographicToProjection(x : any, y : any, z : any): /* Coord.prototype.+Promise */ any;
		
	/**
	 * @api  geographicToEngine(x: float, y: float, z: float) 地理转引擎
	 * @name geographicToEngine
	 * @group Coord
	 * @version 1.0.0
	 * @description 地理转引擎
	 * 
	 * @param x x坐标
	 * @param y y坐标
	 * @param z z坐标
	 * 
	 * @example 使用示例
	 *   let coord = new kapi.Coord()
	 *   let x = 510853.156, y = 4057258.500, z = 0.000
	 *   // 配合 async
	 *   let coordInfo = await coord.geographicToEngine(x, y, z)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param x 
	 * @param y 
	 * @param z 
	 * @return  
	 */
	geographicToEngine(x : any, y : any, z : any): /* Coord.prototype.+Promise */ any;
}
declare var Coord: Coord;

/**
 * 
 */
declare interface Camera {
		
	/**
	 * 
	 */
	new ();
		
	/**
	 * @api  setCameraSpeed(option: object, sync?: boolean) 设置移动速度
	 * @name setCameraSpeed
	 * @group Camera
	 * @version 1.0.0
	 * @description 设置移动速度
	 * 
	 * @param option 移动速度参数
	 * @param option.speed 移动速度
	 * @param option.speedUp 按开键盘后到speed时的加速度
	 * @param option.speedDown 松开键盘后速度停止到0减速度
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let camera = new kapi.Camera()
	 *   let option = {
	 *     speed: 10,
	 *     speedUp: 20,
	 *     speedDown: 30,
	 *   }
	 *   // 配合 async
	 *   let cameraInfo = await camera.setCameraSpeed(option)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param option 
	 * @param sync 
	 * @return  
	 */
	setCameraSpeed(option : any, sync? : any): /* Camera.prototype.+Promise */ any;
		
	/**
	 * @api  getCameraInfo(sync?: boolean) 获取相机参数
	 * @name getCameraInfo
	 * @group Camera
	 * @version 1.0.0
	 * @description 获取相机参数
	 * 
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let camera = new kapi.Camera()
	 *   // 配合 async
	 *   let cameraInfo = await camera.getCameraInfo()
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {
	 *        x: 117.23,
	 *        y: 36.21,
	 *        z: 500,
	 *        rotation: {
	 *          roll: 0.3,
	 *          pitch: 0.5,
	 *          yaw: 1
	 *        }
	 *      }
	 *    }
	 * 
	 * @return Promise
	 * @param sync 
	 * @return  
	 */
	getCameraInfo(sync? : any): /* Camera.prototype.+Promise */ any;
		
	/**
	 * @api  flyTo(position: object, during: number, sync?: boolean) 飞到某位置
	 * @name flyTo
	 * @group Camera
	 * @version 1.0.0
	 * @description 将相机飞到某位置
	 * 
	 * @param position 位置信息
	 * @param position.x x/经度
	 * @param position.y y/维度
	 * @param position.z z/高度
	 * @param position.rotation 姿态
	 * @param position.rotation.roll 翻滚角
	 * @param position.rotation.pitch 俯仰角
	 * @param position.rotation.yaw 偏航角
	 * @param during 在飞行多少秒后到目标点，默认1.5秒
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let camera = new kapi.Camera()
	 *   // 配合 async
	 *   let position = {
	 *      floor: 27,
	 *      x: 108020.0,
	 *      y: -129000.0,
	 *      z: -8240.0,
	 *      distance: 300,
	 *      rotation: {
	 *        roll: 0,
	 *        pitch: 0,
	 *        yaw: -120.000153
	 *      }
	 *    }
	 *   // 定位到27楼
	 *   let response = await camera.flyTo(position)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param position 
	 * @param during 
	 * @param sync 
	 * @return  
	 */
	flyTo(position : any, during : number, sync? : any): /* Camera.prototype.+Promise */ any;
		
	/**
	 * @api  setRotationStatus(status: boolean, speed: float, sync?: boolean) 绕物旋转
	 * @name setRotationStatus
	 * @group Camera
	 * @version 1.0.0
	 * @description 设置场景绕物旋转
	 * 
	 * @param status 开启状态
	 * @param speed 旋转速度
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let camera = new kapi.Camera()
	 *   // 配合 async
	 *   let res = await camera.setRotationStatus(true, 0.5)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "KAPI Rotating",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param status 
	 * @param speed 
	 * @param sync 
	 * @return  
	 */
	setRotationStatus(status : any, speed : number, sync? : any): /* Camera.prototype.+Promise */ any;
		
	/**
	 * @api  setCameraHeight(height: float, sync?: boolean) 设置相机高度
	 * @name setCameraHeight
	 * @group Camera
	 * @version 1.0.0
	 * @description 设置相机高度
	 * 
	 * @param height 高度值，正值为向上，负值为向下
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let camera = new kapi.Camera()
	 *   // 配合 async
	 *   // 使相机向上100m
	 *   let res = await camera.setCameraHeight(100)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "设置成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param height 
	 * @param sync 
	 * @return  
	 */
	setCameraHeight(height : any, sync? : any): /* Camera.prototype.+Promise */ any;
		
	/**
	 * @api  setCameraAngleLimit(min: float, max: float, sync?: boolean) 设置相机高度
	 * @name setCameraHeight
	 * @group Camera
	 * @version 1.0.0
	 * @description 设置相机高度
	 * 
	 * @param min yaw最小值
	 * @param max yaw最大值
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let camera = new kapi.Camera()
	 *   // 配合 async
	 *   // 使相机向上100m
	 *   let res = await camera.setCameraAngleLimit(-50,50)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "设置成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param min 
	 * @param max 
	 * @param sync 
	 * @return  
	 */
	setCameraAngleLimit(min : any, max : any, sync? : any): /* Camera.prototype.+Promise */ any;
		
	/**
	 * @api  playRoute(route: array, option: object, sync?: boolean) 开始漫游
	 * @name playRoute
	 * @group Camera
	 * @version 1.0.0
	 * @description 开始漫游
	 * 
	 * @param route 路线数组，投影坐标和地理坐标都是x,y,z
	 * @param option 飞行参数
	 * @param option.speed 飞行速度，默认10m/s，单位（米/每秒，m/s）
	 * @param option.unit 速度单位，默认（米/每秒，m/s），可选（公里/小时，km/h），不传或传错则使用默认m/s
	 * @param option.loop 是否循环漫游，默认false
	 * @param option.isGraphic 是否是地理坐标（经纬度），默认true
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let camera = new kapi.Camera()
	 *   let route = [{x: 117.0951698, y: 36.6568560, z: 100, rotation: {yaw: 1, roll: 0, pitch: 1}},
	 *          {x: 117.0989151, y: 36.6579687, z: 100, rotation: {yaw: 1, roll: 0, pitch: 1}},
	 *          {x: 117.101380, y: 36.658651, z: 100, rotation: {yaw: 1, roll: 0, pitch: 1}},
	 *          {x: 117.104513, y: 36.658556, z: 100, rotation: {yaw: 1, roll: 0, pitch: 1}},
	 *          {x: 117.110243, y: 36.658797, z: 100, rotation: {yaw: 1, roll: 0, pitch: 1}},
	 *          {x: 117.113300, y: 36.659102, z: 100, rotation: {yaw: 1, roll: 0, pitch: 1}},
	 *          {x: 117.117694, y: 36.659221, z: 100, rotation: {yaw: 1, roll: 0, pitch: 1}},
	 *          {x: 117.121247, y: 36.659218, z: 100, rotation: {yaw: 1, roll: 0, pitch: 1}},
	 *          {x: 117.122851, y: 36.658847, z: 100, rotation: {yaw: 1, roll: 0, pitch: 1}},
	 *          {x: 117.126288, y: 36.658258, z: 100, rotation: {yaw: 1, roll: 0, pitch: 1}},
	 *          {x: 117.128160, y: 36.658287, z: 100, rotation: {yaw: 1, roll: 0, pitch: 1}},
	 *          {x: 117.128318, y: 36.661273, z: 100, rotation: {yaw: 1, roll: 0, pitch: 1}},
	 *          {x: 117.1294164, y: 36.6614676, z: 100, rotation: {yaw: 1, roll: 0, pitch: 1}},
	 *          {x: 117.1302911, y: 36.6619168, z: 100, rotation: {yaw: 1, roll: 0, pitch: 1}},
	 *          {x: 117.1306743, y: 36.6626012, z: 100, rotation: {yaw: 1, roll: 0, pitch: 1}}
	 *       ]
	 * 
	 *   let option = {
	 *     speed: 10,
	 *     unit: "m/s",
	 *     loop: true,
	 *     isGraphic: true
	 *   }
	 *   // 配合 async
	 *   let res = await camera.playRoute(route, option)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "漫游结束",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param route 
	 * @param option 
	 * @param sync 
	 * @return  
	 */
	playRoute(route : any, option : any, sync? : any): /* Camera.prototype.+Promise */ any;
		
	/**
	 * @api  stopRoute(sync?: boolean) 停止漫游
	 * @name stopRoute
	 * @group Camera
	 * @version 1.0.0
	 * @description 漫游
	 * 
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let camera = new kapi.Camera()
	 *   // 配合 async
	 *   let res = await camera.stopRoute()
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "漫游已停止",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param sync 
	 * @return  
	 */
	stopRoute(sync? : any): /* Camera.prototype.+Promise */ any;
		
	/**
	 * @api  playRouteFree() 开启自由漫游
	 * @name playRouteFree
	 * @group Camera
	 * @version 1.0.0
	 * @description 开启自由漫游
	 * 
	 * 
	 * @example {js} 使用示例:
	 *   let camera = new kapi.Camera();
	 *   // 配合 async
	 *   let res = await camera.playRouteFree();
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "漫游结束",
	 *      data: {}
	 *    }
	 * @return  
	 */
	playRouteFree(): /* Camera.prototype.+Promise */ any;
		
	/**
	 * @api  stopRouteFree() 停止自由漫游
	 * @name stopRouteFree
	 * @group Camera
	 * @version 1.0.0
	 * @description 停止自由漫游
	 * 
	 * @example {js} 使用示例:
	 *   let camera = new kapi.Camera();
	 *   // 配合 async
	 *   let res = await camera.stopRouteFree();
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "漫游已停止",
	 *      data: {}
	 *    }
	 * @return  
	 */
	stopRouteFree(): /* Camera.prototype.+Promise */ any;
		
	/**
	 * @api  startPatrol() 【多种类型】开启漫游
	 * @name startPatrol
	 * @group Camera
	 * @version 1.0.0
	 * @description 开启漫游，支持多种类型
	 * 
	 * @param type 巡检类型，0人员车辆巡检，1其他巡检
	 * @param speed 移动速度，单位（米/秒），默认10米/秒
	 * 
	 * @example {js} 使用示例:
	 *   let camera = new kapi.Camera();
	 *   // 配合 async
	 *   let res = await camera.startPatrol();
	 * 
	 * @returns {json}:
	 *    {
	 *      code: 200,
	 *      message: "漫游结束",
	 *      data: {}
	 *    }
	 * @param type 
	 * @param speed 
	 * @return  
	 */
	startPatrol(type : any, speed : number): /* Camera.prototype.+Promise */ any;
		
	/**
	 * @api  stopPatrol() 【多种类型】停止漫游
	 * @name stopPatrol
	 * @group Camera
	 * @version 1.0.0
	 * @description 停止漫游
	 * 
	 * @example {js} 使用示例:
	 *   let camera = new kapi.Camera();
	 *   // 配合 async
	 *   let res = await camera.stopPatrol();
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "漫游已停止",
	 *      data: {}
	 *    }
	 * @return  
	 */
	stopPatrol(): /* Camera.prototype.+Promise */ any;
		
	/**
	 * @api  addBookmark(type: string, sync?: boolean) 添加自定义书签
	 * @name addBookmark
	 * @group Camera
	 * @version 1.0.0
	 * @description 添加自定义书签
	 * 
	 * @param type 返回坐标的类型（engine、project、graphic）
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let camera = new kapi.Camera()
	 *   let type = "graphic";
	 *   // 配合 async
	 *   // 添加自定义书签
	 *   let res = await camera.addBookmark(type)
	 * 
	 * @returns {json}
	 *    {
	 *      "timestamp": 1648538635305,
	 *      "code": 200,
	 *      "message": "返回成功",
	 *      "data": {}
	 *    }
	 * @return Promise
	 * @param type 
	 * @param sync 
	 * @return  
	 */
	addBookmark(type : any, sync? : any): /* Camera.prototype.+Promise */ any;
}
declare var Camera: Camera;

/**
 * 
 */
declare interface Controller {
		
	/**
	 * 
	 */
	new ();
		
	/**
	 * @api  setWeatherType(type: int, sync?: boolean) 设置天气
	 * @name setWeatherType
	 * @group Controller
	 * @version 1.0.0
	 * @description 设置天气，支持11种天气情况：晴天、少云、多云、阴天、雾天、小雨、中雨、暴风雨、小雪、中雪、暴风雪。
	 * 
	 * @param type 天气类型，参考KAPI_CONST.WEATHER字典，如下：<br>
	 * <table>
	 *   <thead><tr><th style="width: 40%">枚举参数</th><th style="width: 60%">天气描述</th></tr></thead>
	 *   <tbody>
	 *     <tr><td class="code">KAPI_CONST.WEATHER.CLEAR_SKIES</td><td><p>晴天</p></td></tr>
	 *     <tr><td class="code">KAPI_CONST.WEATHER.PARTLY_CLOUDY</td><td><p>少云</p></td></tr>
	 *     <tr><td class="code">KAPI_CONST.WEATHER.CLOUDY</td><td><p>多云</p></td></tr>
	 *     <tr><td class="code">KAPI_CONST.WEATHER.OVERCAST</td><td><p>阴天</p></td></tr>
	 *     <tr><td class="code">KAPI_CONST.WEATHER.FOGGY</td><td><p>雾天</p></td></tr>
	 *     <tr><td class="code">KAPI_CONST.WEATHER.LIGHT_RAIN</td><td><p>小雨</p></td></tr>
	 *     <tr><td class="code">KAPI_CONST.WEATHER.RAIN</td><td><p>中雨</p></td></tr>
	 *     <tr><td class="code">KAPI_CONST.WEATHER.THUNDERSTORM</td><td><p>暴风雨</p></td></tr>
	 *     <tr><td class="code">KAPI_CONST.WEATHER.SAND_DUST</td><td><p>沙尘</p></td></tr>
	 *     <tr><td class="code">KAPI_CONST.WEATHER.SANDSTORM</td><td><p>沙尘暴</p></td></tr>
	 *     <tr><td class="code">KAPI_CONST.WEATHER.LIGHT_SNOW</td><td><p>小雪</p></td></tr>
	 *     <tr><td class="code">KAPI_CONST.WEATHER.SNOW</td><td><p>中雪</p></td></tr>
	 *     <tr><td class="code">KAPI_CONST.WEATHER.BLIZZARD</td><td><p>暴风雪</p></td></tr>
	 *   </tbody>
	 * </table>
	 * 
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let controller = new kapi.Controller()
	 *   // 配合 async
	 *   let controllerInfo = await controller.setWeatherType(KAPI_CONST.WEATHER.SNOW)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param type 
	 * @param sync 
	 * @return  
	 */
	setWeatherType(type : any, sync? : any): /* Controller.prototype.+Promise */ any;
		
	/**
	 * @api  setTimeSimulate(option: object, sync?: boolean) 时间动态模拟
	 * @name setTimeSimulate
	 * @group Controller
	 * @version 1.0.0
	 * @description 时间动态模拟，24小时动态模拟，可以指定开始时间、多久模拟一个周期和是否循环模拟
	 * 
	 * @param option 参数
	 * @param option.status （int 枚举型）设置时间循环状态（0-开始、1-停止、2-结束）
	 * @param option.startTime 设置开始时间，整数，单位小时
	 * @param option.period 周期，单位秒，默认86400（循环时间为24小时）
	 * @param option.loop 是否循环播放
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let controller = new kapi.Controller()
	 *   // 配合 async
	 *   let controllerInfo = await controller.setTimeSimulate(option)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param option 
	 * @param sync 
	 * @return  
	 */
	setTimeSimulate(option : Controller.prototype.SetTimeSimulate0, sync? : any): /* Controller.prototype.+Promise */ any;
		
	/**
	 * @api  setRealWorldTime(sync?: boolean) 真实时间
	 * @name setRealWorldTime
	 * @group Controller
	 * @version 1.0.0
	 * @description 设置与真实时间同步
	 * 
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let controller = new kapi.Controller()
	 *   // 配合 async
	 *   let controllerInfo = await controller.setRealWorldTime()
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param sync 
	 * @return  
	 */
	setRealWorldTime(sync? : any): /* Controller.prototype.+Promise */ any;
		
	/**
	 * @api  setSkyColorParam(option: object, sync?: boolean) 设置天空色彩参数
	 * @name setSkyColorParam
	 * @group Controller
	 * @version 1.0.0
	 * @description 天空色彩
	 * 
	 * @param option 天空色彩参数
	 * @param option.temperature 色温（1700-12000）
	 * @param option.contrast 对比度（0-1）
	 * @param option.saturation 饱和度（0-1.5）
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let controller = new kapi.Controller()
	 *   // 配合 async
	 *   let option = {
	 *     temperature: 4000,
	 *     contrast: 0.5,
	 *     saturation: 0.5,
	 *   }
	 *   let controllerInfo = await controller.setSkyColorParam(option)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param option 
	 * @param sync 
	 * @return  
	 */
	setSkyColorParam(option : Controller.prototype.SetSkyColorParam0, sync? : any): /* Controller.prototype.+Promise */ any;
		
	/**
	 * @api  enableFPS(time: float, sync?: boolean) 启用帧数
	 * @name enableFPS
	 * @group Controller
	 * @version 1.0.0
	 * @description 启用帧数
	 * 
	 * @param time 获取时间间隔，默认1秒获取一次
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let controller = new kapi.Controller()
	 *   // 0.5 秒获取一次帧率
	 *   let time = 0.5
	 *   // 配合 async
	 *   let fpsStatus = await controller.enableFPS(time)
	 *   // 然后使用事件监听获取帧率
	 *   let event = new kapi.Event()
	 *   event.addEventListener('fps', data => {
	 *     if (data.code === 200) {
	 *       console.log(data)
	 *     }
	 *   })
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param time 
	 * @param sync 
	 * @return  
	 */
	enableFPS(time : number, sync? : any): /* Controller.prototype.+Promise */ any;
		
	/**
	 * @api  disableFPS(sync?: boolean) 禁用帧率
	 * @name disableFPS
	 * @group Controller
	 * @version 1.0.0
	 * @description 禁用帧率
	 * 
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let controller = new kapi.Controller()
	 *   // 配合 async
	 *   let fpsStatus = await controller.disableFPS()
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param sync 
	 * @return  
	 */
	disableFPS(sync? : any): /* Controller.prototype.+Promise */ any;
		
	/**
	 * @api  addFPSEventListener(callback: function) 设置帧率的点击监听
	 * @name addFPSEventListener
	 * @group Controller
	 * @version 1.0.0
	 * @description 设置帧率的点击监听
	 * @param callback 回调
	 * 
	 * @example 使用示例
	 *   let controller = new kapi.Controller()
	 *   controller.addFPSEventListener(response => {
	 * 
	 *   })
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return null
	 * @param callback 
	 */
	addFPSEventListener(callback : any): void;
		
	/**
	 * @api  removeFPSEventListener() 删除帧率的点击监听
	 * @name removeFPSEventListener
	 * @group Controller
	 * @version 1.0.0
	 * @description 删除帧率的点击监听
	 * 
	 * @example 使用示例
	 *   let controller = new kapi.Controller()
	 *   controller.removeFPSEventListener()
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return null
	 */
	removeFPSEventListener(): void;
		
	/**
	 * @api  showCompass(position: string, sync?: boolean) 显示指南针控件
	 * @name showCompass
	 * @group Controller
	 * @version 1.0.0
	 * @description 显示指南针控件
	 * 
	 * @param position 控件屏幕位置，默认left-top，可取值：left-top, left-bottom，right-top，right-bottom
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let controller = new kapi.Controller()
	 *   // 配合 async
	 *   let controllerInfo = await controller.showCompass('left-top')
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "添加指南针成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param position 
	 * @param sync 
	 * @return  
	 */
	showCompass(position : string, sync? : any): /* Controller.prototype.+Promise */ any;
		
	/**
	 * @api  hideCompass(sync?: boolean) 隐藏指南针控件
	 * @name hideCompass
	 * @group Controller
	 * @version 1.0.0
	 * @description 隐藏指南针控件
	 * 
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let controller = new kapi.Controller()
	 *   // 配合 async
	 *   let controllerInfo = await controller.hideCompass()
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "移除指南针成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param sync 
	 * @return  
	 */
	hideCompass(sync? : any): /* Controller.prototype.+Promise */ any;
		
	/**
	 * @api  enableBoxSide(sync?: boolean) 开启操作边界限制
	 * @name enableBoxSide
	 * @group Controller
	 * @version 1.0.0
	 * @description 开启操作边界限制
	 * 
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let controller = new kapi.Controller()
	 *   // 配合 async
	 *   let controllerInfo = await controller.enableBoxSide()
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "开启边界限制成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param sync 
	 * @return  
	 */
	enableBoxSide(sync? : any): /* Controller.prototype.+Promise */ any;
		
	/**
	 * @api  disableBoxSide(sync?: boolean) 关闭操作边界限制
	 * @name disableBoxSide
	 * @group Controller
	 * @version 1.0.0
	 * @description 关闭操作边界限制
	 * 
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let controller = new kapi.Controller()
	 *   // 配合 async
	 *   let controllerInfo = await controller.disableBoxSide()
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "关闭边界限制成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param sync 
	 * @return  
	 */
	disableBoxSide(sync? : any): /* Controller.prototype.+Promise */ any;
		
	/**
	 * @api  setDateTime(dateTime: string | Date | DateTime | DateString, sync?: boolean) 时间跳转
	 * @name setDateTime
	 * @group Controller
	 * @version 1.0.0
	 * @description 时间跳转
	 * 
	 * @param dateTime 时间字符串或时间戳 [标准的时间字符串，new Date().getTime()]
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let controller = new kapi.Controller()
	 *   // 跳转到 2010年，10月10日的上午10点20分20秒
	 *   let dateTime = '2010-10-10 10:20:20'
	 *   // or
	 *   dateTime = new Date()
	 *   // or
	 *   dateTime = new Date().getTime()
	 *   // or
	 *   dateTime = new Date().toString()
	 *   // 配合 async
	 *   let controllerInfo = await controller.setDateTime(dateTime)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "设置24小时时间成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param dateTime 
	 * @param sync 
	 * @return  
	 */
	setDateTime(dateTime : any, sync? : any): /* Controller.prototype.+Promise */ any;
		
	/**
	 * @api  enableLightShow(sync?: boolean) 开启灯光状态
	 * @name enableLightShow
	 * @group Controller
	 * @version 1.0.0
	 * @description 开启灯光状态
	 * 
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let controller = new kapi.Controller()
	 *   // 配合 async
	 *   let controllerInfo = await controller.enableLightShow()
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "灯光控制成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param sync 
	 * @return  
	 */
	enableLightShow(sync? : any): /* Controller.prototype.+Promise */ any;
		
	/**
	 * @api  disableLightShow(sync?: boolean) 关闭灯光状态
	 * @name disableLightShow
	 * @group Controller
	 * @version 1.0.0
	 * @description 关闭灯光状态
	 * 
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let controller = new kapi.Controller()
	 *   // 配合 async
	 *   let controllerInfo = await controller.disableLightShow()
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "灯光控制成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param sync 
	 * @return  
	 */
	disableLightShow(sync? : any): /* Controller.prototype.+Promise */ any;
		
	/**
	 * @api  enableMouseInput(sync?: boolean) 启用鼠标
	 * @name enableMouseInput
	 * @group Controller
	 * @version 1.0.0
	 * @description 启用鼠标
	 * 
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let controller = new kapi.Controller()
	 *   // 配合 async
	 *   let controllerInfo = await controller.enableMouseInput()
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "启用成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param sync 
	 * @return  
	 */
	enableMouseInput(sync? : any): /* Controller.prototype.+Promise */ any;
		
	/**
	 * @api  disableMouseInput(sync?: boolean) 禁用鼠标
	 * @name disableMouseInput
	 * @group Controller
	 * @version 1.0.0
	 * @description 禁用鼠标
	 * 
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let controller = new kapi.Controller()
	 *   // 配合 async
	 *   let controllerInfo = await controller.disableMouseInput()
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "禁用成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param sync 
	 * @return  
	 */
	disableMouseInput(sync? : any): /* Controller.prototype.+Promise */ any;
		
	/**
	 * @api  getCoordinate(options: object, sync?: boolean) 获取坐标点
	 * @name getCoordinate
	 * @apiIgnore
	 * @group Controller
	 * @version 0.0.2
	 * @description 获取坐标点
	 * 
	 * @param options 相关参数
	 * @param options.color rgba，r代表红色，g代表绿色，b代表蓝色，a代表不透明度，例如：[255,0,0,1]对应于红色
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let controller = new kapi.Controller()
	 *   let controllerInfo = await controller.getCoordinate({color: [255, 0, 0, 1], cableColor: [0, 255, 0, 1]})
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {"result":"Lat=*** Lon=*** Alt=***"}
	 *    }
	 * @return Promise
	 * @param options 
	 * @param sync 
	 * @return  
	 */
	getCoordinate(options : any, sync? : any): /* Controller.prototype.+Promise */ any;
		
	/**
	 * 获取网络参数
	 * @param callback
	 * @param callback 
	 */
	getStats(callback : any): void;
		
	/**
	 * 获取格式化的数据
	 * @param val 原先值
	 * @param n 乘积数
	 * @return {string|number} 结果
	 * @param val 
	 * @param n 
	 * @return  
	 */
	getData(val : any, n : any): any;
}
declare var Controller: Controller;

/**
 * 
 */
declare interface Data {
		
	/**
	 * 
	 */
	new ();
		
	/**
	 * @api  parseGeoJSON(fileList: FileList) 导入GeoJSON数据
	 * @name parseGeoJSON
	 * @group Data
	 * @version 1.0.0
	 * @description 导入GeoJSON数据
	 * 
	 * @param fileList 原生的<code>&lt;input type='file' multiple accept=".json"></code>中的fileList结果
	 * @param encoding 编码方式，默认UTF-8
	 * 
	 * @example 使用示例
	 *   html中
	 *   <input id='upload' type='file' multiple accept=".json">
	 *   JavaScript中
	 *   let fileList = document.getElementById('upload').files
	 *   let data = new kapi.Data()
	 *   // 配合 async
	 *   let coordInfo = await data.parseGeoJSON(fileList)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param fileList 
	 * @param encoding 
	 * @return  
	 */
	parseGeoJSON(fileList : any, encoding : string): /* Data.prototype.+Promise */ any;
		
	/**
	 * @api  parseShp(fileList: FileList) 导入Shp数据
	 * @name parseShp
	 * @group Data
	 * @apiIgnore
	 * @version 1.0.0
	 * @description 导入shp数据
	 * 
	 * @param fileList shp的路径/包含shp的zip压缩包/上传文件FileList
	 * 
	 * @example 使用示例
	 *   let data = new kapi.Data()
	 *   // 配合 async
	 *   let coordInfo = await data.parseShp('./data/city.shp')
	 *   // or
	 *   let coordInfo = await data.parseShp(<Shp 的 FileList>)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param fileList 
	 * @return  
	 */
	parseShp(fileList : any): /* Data.prototype.+Promise */ any;
}
declare var Data: Data;

/**
 * 
 */
declare interface Draw {
		
	/**
	 * 
	 */
	new ();
		
	/**
	 * @api  getPointList(sync?: boolean) 获取点列表
	 * @name getPointList
	 * @group Draw
	 * @version 1.0.0
	 * @description 获取点列表【需要完善】
	 * 
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let draw = new kapi.Draw()
	 *   // 配合 async
	 *   let pointList = await draw.getPointList()
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param sync 
	 * @return  
	 */
	getPointList(sync? : any): /* Draw.prototype.+Promise */ any;
		
	/**
	 * @api  openDrawPoint(sync?: boolean) 开启绘制点
	 * @name openDrawPoint
	 * @group Draw
	 * @version 1.0.0
	 * @description 开启绘制点
	 * 
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let draw = new kapi.Draw()
	 *   // 配合 async
	 *   let pointInfo = await draw.openDrawPoint()
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param sync 
	 * @return  
	 */
	openDrawPoint(sync? : any): /* Draw.prototype.+Promise */ any;
		
	/**
	 * @api  closeDrawPoint(sync?: boolean) 关闭绘制点
	 * @name closeDrawPoint
	 * @group Draw
	 * @version 1.0.0
	 * @description 关闭绘制点
	 * 
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let draw = new kapi.Draw()
	 *   // 配合 async
	 *   let pointInfo = await draw.closeDrawPoint()
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param sync 
	 * @return  
	 */
	closeDrawPoint(sync? : any): /* Draw.prototype.+Promise */ any;
		
	/**
	 * @api  drawPoint(type: string, sync?: boolean) 绘制点
	 * @name drawPoint
	 * @group Draw
	 * @version 1.0.0
	 * @description 绘制点
	 * 
	 * @param type 绘制点类型，参考字典 KAPI_CONST.POINT_TYPE，如下：<br>
	 * <table>
	 *   <thead><tr><th style="width: 40%">枚举参数</th><th style="width: 60%">绘制点描述</th></tr></thead>
	 *   <tbody>
	 *     <tr><td class="code">KAPI_CONST.POINT_TYPE.FIRE_01:</td><td><p>火焰1</p></td></tr>
	 *     <tr><td class="code">KAPI_CONST.POINT_TYPE.FIRE_02:</td><td><p>火焰2</p></td></tr>
	 *     <tr><td class="code">KAPI_CONST.POINT_TYPE.FIRE_03:</td><td><p>火焰3</p></td></tr>
	 *     <tr><td class="code">KAPI_CONST.POINT_TYPE.TREE_01:</td><td><p>树1</p></td></tr>
	 *     <tr><td class="code">KAPI_CONST.POINT_TYPE.TREE_02:</td><td><p>树2</p></td></tr>
	 *     <tr><td class="code">KAPI_CONST.POINT_TYPE.TREE_03:</td><td><p>树3</p></td></tr>
	 *     <tr><td class="code">KAPI_CONST.POINT_TYPE.DECAL_01</td><td><p>贴图1</p></td></tr>
	 *     <tr><td class="code">KAPI_CONST.POINT_TYPE.DECAL_02</td><td><p>贴图2</p></td></tr>
	 *     <tr><td class="code">KAPI_CONST.POINT_TYPE.DECAL_03</td><td><p>贴图3</p></td></tr>
	 *     <tr><td class="code">KAPI_CONST.POINT_TYPE.FBX</td><td><p>自定义FBX模型文件</p></td></tr>
	 *   </tbody>
	 * </table>
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let draw = new kapi.Draw()
	 *   // 配合 async
	 *   let pointInfo = await draw.drawPoint(KAPI_CONST.POINT_TYPE.FIRE_01)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param type 
	 * @param sync 
	 * @return  
	 */
	drawPoint(type : any, sync? : any): /* Draw.prototype.+Promise */ any;
		
	/**
	 * @api  deletePoint(id: string, sync?: boolean) 删除点
	 * @name deletePoint
	 * @group Draw
	 * @version 1.0.0
	 * @description 删除点
	 * 
	 * @param id 点的唯一标识
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let draw = new kapi.Draw()
	 *   let id = 'Fire_01'
	 *   // 配合 async
	 *   let pointInfo = await draw.deletePoint(id)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param id 
	 * @param sync 
	 * @return  
	 */
	deletePoint(id : any, sync? : any): /* Draw.prototype.+Promise */ any;
		
	/**
	 * @api  showPoint(id: string, sync?: boolean) 显示点
	 * @name showPoint
	 * @group Draw
	 * @version 1.0.0
	 * @description 显示点
	 * 
	 * @param id 点的唯一标识
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let draw = new kapi.Draw()
	 *   let id = 'Fire_01'
	 *   // 配合 async
	 *   let pointInfo = await draw.showPoint(id)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param id 
	 * @param sync 
	 * @return  
	 */
	showPoint(id : any, sync? : any): /* Draw.prototype.+Promise */ any;
		
	/**
	 * @api  hidePoint(id: string, sync?: boolean) 隐藏点
	 * @name hidePoint
	 * @group Draw
	 * @version 1.0.0
	 * @description 隐藏点
	 * 
	 * @param id 点的唯一标识
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let draw = new kapi.Draw()
	 *   let id = 'Fire_01'
	 *   // 配合 async
	 *   let pointInfo = await draw.hidePoint(id)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param id 
	 * @param sync 
	 * @return  
	 */
	hidePoint(id : any, sync? : any): /* Draw.prototype.+Promise */ any;
		
	/**
	 * @api  drawPolyline(option: object, sync?: boolean) 绘制线
	 * @name drawPolyline
	 * @apiIgnore
	 * @group Draw
	 * @version 1.0.0
	 * @description 绘制线
	 * 
	 * @param option 绘制线参数
	 * @param option.isGraphic 空间参数
	 * @param option.type 预制的点数组
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let draw = new kapi.Draw()
	 *   let option = {
	 *     isGraphic: true,
	 *     type: '01'
	 *   }
	 *   // 配合 async
	 *   let polylineInfo = await draw.drawPolyline(option)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param path 
	 * @param option 
	 * @param sync 
	 * @return  
	 */
	drawPolyline(path : any, option : Draw.prototype.DrawPolyline1, sync? : any): /* Draw.prototype.+Promise */ any;
		
	/**
	 * @api  drawPath(option: object, sync?: boolean) 绘制路径
	 * @name drawPath
	 * @group Draw
	 * @version 1.0.0
	 * @description 绘制路径
	 * 
	 * @param path 预制的点数组
	 * @param option 绘制路径参数
	 * @param option.id 绘制路径的唯一id
	 * @param option.isGraphic 空间参数
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let draw = new kapi.Draw()
	 *   let path = [{}]
	 *   let option = {
	 *     isGraphic: true
	 *   }
	 *   // 配合 async
	 *   let pathInfo = await draw.drawPath(path, option)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param path 
	 * @param option 
	 * @param sync 
	 * @return  
	 */
	drawPath(path : any, option : any, sync? : any): /* Draw.prototype.+Promise */ any;
		
	/**
	 * @api  removePath(id: string, sync?: boolean) 删除路径
	 * @name removePath
	 * @apiIgnore
	 * @group Draw
	 * @version 1.0.0
	 * @description 删除路径
	 * 
	 * @param id 绘制路径的唯一id
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let draw = new kapi.Draw()
	 *   // 配合 async
	 *   let pathInfo = await draw.removePath('del_id')
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param id 
	 * @param sync 
	 * @return  
	 */
	removePath(id : any, sync? : any): /* Draw.prototype.+Promise */ any;
		
	/**
	 * @api  clearPath(sync?: boolean) 清空路径
	 * @name clearPath
	 * @group Draw
	 * @version 1.0.0
	 * @description 清空路径
	 * 
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let draw = new kapi.Draw()
	 *   // 配合 async
	 *   let pathInfo = await draw.clearPath()
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param sync 
	 * @return  
	 */
	clearPath(sync? : any): /* Draw.prototype.+Promise */ any;
		
	/**
	 * @api  drawLightFlow(sync?: boolean) 开始绘制光流
	 * @name drawLightFlow
	 * @group Draw
	 * @version 1.0.0
	 * @description 开始绘制光流
	 * 
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let draw = new kapi.Draw()
	 *   // 配合 async
	 *   let lightflow = await draw.drawLightFlow()
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "开始绘制光流",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param sync 
	 * @return  
	 */
	drawLightFlow(sync? : any): /* Draw.prototype.+Promise */ any;
		
	/**
	 * @api  closeDrawLightFlow(sync?: boolean) 结束绘制光流
	 * @name closeDrawLightFlow
	 * @group Draw
	 * @version 1.0.0
	 * @description 结束绘制光流
	 * 
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let draw = new kapi.Draw()
	 *   // 配合 async
	 *   let lightflow = await draw.closeDrawLightFlow()
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "绘制光流成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param sync 
	 * @return  
	 */
	closeDrawLightFlow(sync? : any): /* Draw.prototype.+Promise */ any;
		
	/**
	 * @api  removeLightFlow(id: string, sync?: boolean) 删除光流
	 * @name removeLightFlow
	 * @group Draw
	 * @version 1.0.0
	 * @description 删除光流
	 * 
	 * @param id 光流识别名称
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let draw = new kapi.Draw()
	 *   let id="a-pawn_2.NODE_AddSplineMeshComponent-6_4 BeamMesh"
	 *   // 配合 async
	 *   let lightflow = await draw.removeLightFlow(id)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "删除光流成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param id 
	 * @return  
	 */
	removeLightFlow(id : any): /* Draw.prototype.+Promise */ any;
		
	/**
	 * @api  drawContour(contour: array, option: object, sync?: boolean) 绘制区域轮廓
	 * @name drawContour
	 * @group Draw
	 * @version 1.0.0
	 * @description 绘制区域轮廓
	 * 
	 * @param contour 预制的点数组
	 * @param option 绘制区域轮廓参数
	 * @param option.id 绘制路径的唯一id
	 * @param option.isGraphic 空间参数
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let draw = new kapi.Draw()
	 *   let option = {
	 *     isGraphic: true,
	 *     id: "1"
	 *   }
	 *   let contour=[{x:117.135867,y:36.666129,z:0},{x:117.13505,y:36.666165,z:0},{x:117.13372,y:36.666288,z:0},{x:117.132966,y:36.666578,z:0},{x:117.132957,y:36.667056,z:0},{x:117.13293,y:36.668264,z:0},{x:117.132957,y:36.668554,z:0},{x:117.132984,y:36.66893,z:0},{x:117.132975,y:36.669285,z:0},{x:117.132957,y:36.669538,z:0},{x:117.133415,y:36.669538,z:0},{x:117.133981,y:36.669545,z:0},{x:117.134592,y:36.669632,z:0},{x:117.13558,y:36.66961,z:0},{x:117.136155,y:36.669574,z:0},{x:117.136164,y:36.669285,z:0},{x:117.136316,y:36.669133,z:0},{x:117.136586,y:36.668865,z:0},{x:117.136568,y:36.668518,z:0},{x:117.136541,y:36.668192,z:0},{x:117.136397,y:36.667859,z:0},{x:117.136379,y:36.667483,z:0},{x:117.136298,y:36.667099,z:0},{x:117.136244,y:36.666665,z:0}]
	 *   // 配合 async
	 *   let pathInfo = await draw.drawContour(contour,option)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param contour 
	 * @param option 
	 * @param sync 
	 * @return  
	 */
	drawContour(contour : any, option : any, sync? : any): /* Draw.prototype.+Promise */ any;
		
	/**
	 * @api  removeContour(id: string, sync?: boolean) 删除区域轮廓
	 * @name removeContour
	 * @group Draw
	 * @version 1.0.0
	 * @description 删除区域轮廓
	 * 
	 * @param id 区域识别名称
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let draw = new kapi.Draw()
	 *   let id="1"
	 *   // 配合 async
	 *   let lightflow = await draw.removeContour(id)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "删除区域轮廓成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param id 
	 * @param sync 
	 * @return  
	 */
	removeContour(id : any, sync? : any): /* Draw.prototype.+Promise */ any;
		
	/**
	 * @api  drawCircularContour(option: object, sync?: boolean) 绘制圆形区域轮廓
	 * @name drawCircularContour
	 * @group Draw
	 * @version 1.0.0
	 * @description 绘制区域轮廓
	 * 
	 * @param option 绘制区域轮廓参数
	 * @param option.radius 绘制圆的半径
	 * @param option.isGraphic 空间参数
	 * @param option.location 绘制圆形圆心坐标
	 * @param option.location.x 绘制圆形圆心坐标x
	 * @param option.location.y 绘制圆形圆心坐标y
	 * @param option.location.z 绘制圆形圆心坐标z
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let draw = new kapi.Draw()
	 *   let option = {
	 *     isGraphic: true,
	 *     radius: 50,
	 *     location:{
	 *       x:511128,
	 *       y:4056989,
	 *       z:85,
	 *     }
	 *   }
	 *   let pathInfo = await draw.drawCircularContour(option)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param option 
	 * @param sync 
	 * @return  
	 */
	drawCircularContour(option : any, sync? : any): /* Draw.prototype.+Promise */ any;
		
	/**
	 * @api  removeCircularContour(id: string, sync?: boolean) 删除圆形区域轮廓
	 * @name removeCircularContour
	 * @group Draw
	 * @version 1.0.0
	 * @description 删除圆形区域轮廓
	 * 
	 * @param id 圆形区域识别名称
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let draw = new kapi.Draw()
	 *   let id="1"
	 *   // 配合 async
	 *   let lightflow = await draw.removeCircularContour(id)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "删除圆形区域轮廓成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param id 
	 * @param sync 
	 * @return  
	 */
	removeCircularContour(id : any, sync? : any): /* Draw.prototype.+Promise */ any;
		
	/**
	 * @api  removeDecal(id: string, sync?: boolean) 删除贴花
	 * @name removeDecal
	 * @group Draw
	 * @version 1.0.0
	 * @description 删除贴花
	 * 
	 * @param id 贴花识别名称
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let draw = new kapi.Draw()
	 *   let id="1"
	 *   // 配合 async
	 *   let lightflow = await draw.removeDecal(id)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "删除贴花成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param id 
	 * @param sync 
	 * @return  
	 */
	removeDecal(id : any, sync? : any): /* Draw.prototype.+Promise */ any;
		
	/**
	 * @api  drawDecal(option: object, sync?: boolean) 绘制贴花
	 * @name drawDecal
	 * @group Draw
	 * @version 1.0.0
	 * @description 绘制贴花
	 * 
	 * @param option 绘制贴花参数
	 * @param option.type 绘制贴花【straight  直行引导线；straightright  直行加右转引导线；straightleft  直行加左转引导线；right  右转引导线；left  左转引导线；manholecover  圆形井盖】
	 * @param option.isGraphic 空间参数【默认接收地理坐标，指定isGraphic为false时，认为接收投影坐标，示例为投影坐标】
	 * @param option.location 绘制贴花坐标
	 * @param option.location.x 绘制贴花坐标x
	 * @param option.location.y 绘制贴花坐标y
	 * @param option.location.z 绘制贴花坐标z
	 * @param option.rotation 绘制贴花姿态【默认朝向北方，修改z轴方向可平行于地面旋转】
	 * @param option.rotation.x 绘制贴花姿态x
	 * @param option.rotation.y 绘制贴花姿态y
	 * @param option.rotation.z 绘制贴花姿态z
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let draw = new kapi.Draw()
	 *   let option = {
	 *     isGraphic: false,
	 *     type: 'manholecover',
	 *     location:{
	 *       x:511128,
	 *       y:4056989,
	 *       z:85,
	 *     },
	 *    rotation:{
	 *       x:0,
	 *       y:0,
	 *       z:0,
	 *     }
	 *   }
	 *   let pathInfo = await draw.drawDecal(option)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param option 
	 * @param sync 
	 * @return  
	 */
	drawDecal(option : Draw.prototype.DrawDecal0, sync? : any): /* Draw.prototype.+Promise */ any;
		
	/**
	 * @api  getAllByWindow(type) 全选视窗物体
	 * @name getAllByWindow
	 * @group Draw
	 * @version 1.0.0
	 * @description 全选视窗物体
	 * 
	 * @param type 物体类型【staticmesh  静态网格体；tree  树木；car  车辆】
	 * 
	 * @example 使用示例
	 *   let draw = new kapi.Draw()
	 *   let type = "staticmesh"
	 *   // 配合 async
	 *   let all = await draw.getAllByWindow(type)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param type 
	 * @return  
	 */
	getAllByWindow(type : any): /* Draw.prototype.+Promise */ any;
}
declare var Draw: Draw;

/**
 * 
 */
declare interface Event {
		
	/**
	 * 
	 */
	new ();
		
	/**
	 * @api  addMessageListener(callback: function) 设置消息监听
	 * @name addMessageListener
	 * @apiIgnore
	 * @group Event
	 * @version 1.0.0
	 * @description 设置消息监听(PixelStream原生监听)
	 * 
	 * @param response 回调
	 * 
	 * @example 使用示例
	 *   let event = new kapi.Event()
	 *   event.addMessageListener(response => {
	 * 
	 *   })
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param callback 
	 */
	addMessageListener(callback : any): void;
		
	/**
	 * @api  addEventListener(eventName: string, callback: function) 设置自定义监听
	 * @name addEventListener
	 * @group Event
	 * @version 1.0.0
	 * @description 设置自定义监听
	 * @param eventName 自定义监听标识
	 * @param callback 回调
	 * 
	 * @example 使用示例
	 *   let event = new kapi.Event()
	 *   // 配合帧率启用接口监听帧率值变化
	 *   event.addEventListener(KAPI_CONST.EVENT.FPS, response => {
	 * 
	 *   })
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param eventName 
	 * @param callback 
	 */
	addEventListener(eventName : any, callback : any): void;
		
	/**
	 * @api  removeEventListener(eventName: string) 删除自定义监听
	 * @name removeEventListener
	 * @group Event
	 * @version 1.0.0
	 * @description 删除自定义监听
	 * 
	 * @param eventName 自定义监听标识
	 * 
	 * @example 使用示例
	 *   let event = new kapi.Event()
	 *   event.removeEventListener("test_btn")
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param eventName 
	 */
	removeEventListener(eventName : any): void;
}
// @ts-ignore
declare var Event: Event;

/**
 * 
 */
declare interface Iot {
		
	/**
	 * 
	 */
	new ();
		
	/**
	 * @api  openById(id: string, sync?: boolean) 根据ID打开设备
	 * @name openById
	 * @group Iot
	 * @version 1.0.0
	 * @description 根据设备ID打开设备
	 * 
	 * @param id 需要打开的设备ID
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   html中
	 *   let iot = new kapi.Iot()
	 *   // 配合 async
	 *   let res = await iot.openById(deviceId, sync)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param id 
	 * @param sync 
	 * @return  
	 */
	openById(id : any, sync? : any): /* Iot.prototype.+Promise */ any;
		
	/**
	 * @api  closeById(id: string, sync?: boolean) 根据ID关闭设备
	 * @name closeById
	 * @group Iot
	 * @version 1.0.0
	 * @description 根据设备ID关闭设备
	 * 
	 * @param id 需要关闭的设备ID
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   html中
	 *   let iot = new kapi.Iot()
	 *   // 配合 async
	 *   let res = await iot.closeById(deviceId, sync)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param id 
	 * @param sync 
	 * @return  
	 */
	closeById(id : any, sync? : any): /* Iot.prototype.+Promise */ any;
		
	/**
	 * @api  setStatusById(id: string, status: boolean, sync?: boolean) 根据ID设置设备
	 * @name setStatusById
	 * @group Iot
	 * @version 1.0.0
	 * @description 根据设备ID、状态设置设备状态
	 * 
	 * @param id 需要设置的设备ID
	 * @param status 设置的状态，开/关（状态可自定义）
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   html中
	 *   let iot = new kapi.Iot()
	 *   // 配合 async
	 *   let res = await iot.setStatusById(deviceId, deviceStatus, sync)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param id 
	 * @param status 
	 * @param sync 
	 * @return  
	 */
	setStatusById(id : any, status : any, sync? : any): /* Iot.prototype.+Promise */ any;
		
	/**
	 * @api  openByType(type: string, sync?: boolean) 根据类型批量打开设备
	 * @name openByType
	 * @group Iot
	 * @version 1.0.0
	 * @description 根据设备类型批量打开设备
	 * 
	 * @param type 需要打开的设备类型
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   html中
	 *   let iot = new kapi.Iot()
	 *   // 配合 async
	 *   let res = await iot.openByType(deviceType, sync)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param type 
	 * @param sync 
	 * @return  
	 */
	openByType(type : any, sync? : any): /* Iot.prototype.+Promise */ any;
		
	/**
	 * @api  closeByType(type: string, sync?: boolean) 根据类型批量关闭设备
	 * @name closeByType
	 * @group Iot
	 * @version 1.0.0
	 * @description 根据设备类型批量关闭设备
	 * 
	 * @param type 需要关闭的设备类型
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   html中
	 *   let iot = new kapi.Iot()
	 *   // 配合 async
	 *   let res = await iot.closeById(deviceType, sync)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param id 
	 * @param sync 
	 * @return  
	 */
	closeByType(id : any, sync? : any): /* Iot.prototype.+Promise */ any;
		
	/**
	 * @api  setStatusByType(type: string, status: boolean, sync?: boolean) 根据类型批量设置设备
	 * @name setStatusByType
	 * @group Iot
	 * @version 1.0.0
	 * @description 根据设备类型、状态批量设置设备状态
	 * 
	 * @param type 需要设置的设备类型
	 * @param status 设置的状态，开/关（状态可自定义）
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   html中
	 *   let iot = new kapi.Iot()
	 *   // 配合 async
	 *   let res = await iot.setStatusByType(deviceType, deviceStatus, sync)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param type 
	 * @param status 
	 * @param sync 
	 * @return  
	 */
	setStatusByType(type : any, status : any, sync? : any): /* Iot.prototype.+Promise */ any;
}
declare var Iot: Iot;

/**
 * 
 */
declare interface Layer {
		
	/**
	 * 
	 */
	new ();
		
	/**
	 * @api  add3DTiles(urls) 加载3dtiles
	 * @name add3DTiles
	 * @group Layer
	 * @version 1.0.0
	 * @description 加载 3dtiles，可以是字符串，也可以是数组
	 * 
	 * @param urls 服务地址
	 * 
	 * @example 使用示例
	 *   let layer = new kapi.Layer()
	 *   // 1、配合 async 字符串
	 *   let res = await layer.add3DTiles('http://localhost/demo/tileset.json')
	 *   // 2、配合 async 数组
	 *   let urls = ['http://localhost/demo/tileset.json',
	 *              'http://localhost/demo2/tileset.json',
	 *              'http://localhost/demo2/tileset.json']
	 *   let res = await layer.add3DTiles(urls)
	 *   // 3、配合 async 对象数组
	 *   let urls = [{url: 'http://localhost/demo/tileset.json'},
	 *              {url: 'http://localhost/demo/tileset.json'},
	 *              {url: 'http://localhost/demo/tileset.json'}]
	 *   let res = await layer.add3DTiles(urls)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param urls 
	 * @return  
	 */
	add3DTiles(urls : any): /* Layer.prototype.+Promise */ any;
		
	/**
	 * @api  getAllLayers() 获取所有服务
	 * @name getAllLayers
	 * @group Layer
	 * @version 1.0.0
	 * @description 获取所有服务
	 * 
	 * @example 使用示例
	 *   let layer = new kapi.Layer()
	 *   // 1、配合 async 字符串
	 *   let res = await layer.getAllLayers()
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @return  
	 */
	getAllLayers(): /* Layer.prototype.+Promise */ any;
		
	/**
	 * @api  showLayer(url) 根据url显示服务
	 * @name showLayer
	 * @group Layer
	 * @version 1.0.0
	 * @description 根据url显示服务
	 * 
	 * @param url 服务url
	 * 
	 * @example 使用示例
	 *   let layer = new kapi.Layer()
	 *   // 1、配合 async 字符串
	 *   let res = await layer.showLayer('123')
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param url 
	 * @return  
	 */
	showLayer(url : any): /* Layer.prototype.+Promise */ any;
		
	/**
	 * @api  hideLayer(url) 根据url隐藏服务
	 * @name hideLayer
	 * @group Layer
	 * @version 1.0.0
	 * @description 根据url隐藏服务
	 * 
	 * @param url 服务url
	 * 
	 * @example 使用示例
	 *   let layer = new kapi.Layer()
	 *   // 1、配合 async 字符串
	 *   let res = await layer.hideLayer('123')
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param url 
	 * @return  
	 */
	hideLayer(url : any): /* Layer.prototype.+Promise */ any;
		
	/**
	 * @api  removeLayer(url) 根据url移除服务
	 * @name removeLayer
	 * @group Layer
	 * @version 1.0.0
	 * @description 根据url移除服务
	 * 
	 * @param url 服务url
	 * 
	 * @example 使用示例
	 *   let layer = new kapi.Layer()
	 *   // 1、配合 async 字符串
	 *   let res = await layer.removeLayer('123')
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param url 
	 * @return  
	 */
	removeLayer(url : any): /* Layer.prototype.+Promise */ any;
}
declare var Layer: Layer;

/**
 * 
 */
declare interface Marker {
		
	/**
	 * 
	 */
	new ();
		
	/**
	 * @api  createMarker(position: object, attributes) 创建标注点
	 * @name createMarker
	 * @group Marker
	 * @version 1.0.0
	 * @description 创建标注点，但不会标注到场景中
	 * 
	 * @param position 坐标 必填
	 * @param position.x x坐标
	 * @param position.y y坐标
	 * @param position.z z坐标
	 * @param attributes 属性
	 * @param attributes.id 标注的id 必填字段
	 * @param attributes.name 标注点名称
	 * @param attributes.type 标注型
	 * @param attributes.scale 标注大小比例
	 * @param attributes.isGraphic 是否是地理坐标，默认是false
	 * 
	 * @example 使用示例
	 *   let marker = new kapi.Marker()
	 *   let options = {
	 *     position: {
	 *       x: 510452.4,
	 *       y: 4056732.75,
	 *       z: 50,
	 *     },
	 *     let attributes = {
	 *       id: 123,
	 *       name: "测试",
	 *       type: "建筑",
	 *       scale:0.5 ,
	 *       isGraphic: false
	 *     }
	 *   }
	 *   // 配合 async
	 *   let markerObject = await marker.createMarker(position, attributes)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {
	 *        id: 123,
	 *        isGraphic: false,
	 *        scale：0.5 ,
	 *        name: "测试",
	 *        position: {
	 *          x: 510452.4,
	 *          y: 4056732.75,
	 *          z: 50,
	 *        },
	 *        type: "建筑",
	 *      }
	 *    }
	 * @return Promise
	 * @param position 
	 * @param attributes 
	 * @return  
	 */
	createMarker(position : any, attributes : any): /* Marker.prototype.+Promise */ any;
		
	/**
	 * @api  add(marker: object, sync?: boolean) 标注点
	 * @name add
	 * @group Marker
	 * @version 1.0.0
	 * @description 标注点，直接标注到场景中
	 * 
	 * @param marker 标注点对象 必填
	 * @param marker.position 坐标 必填
	 * @param marker.position.x x坐标
	 * @param marker.position.y y坐标
	 * @param marker.position.z z坐标
	 * @param marker.attributes 属性
	 * @param marker.attributes.id 标注的id 必填字段
	 * @param marker.attributes.name 标注点名称
	 * @param marker.attributes.type 标注型
	 * @param attributes.scale 标注大小比例
	 * @param attributes.visible 标注显隐
	 * @param marker.attributes.isGraphic 是否是经纬度（地理坐标），默认是false
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let marker = new kapi.Marker()
	 *   let options = {
	 *     position: {
	 *       x: 510452.4,
	 *       y: 4056732.75,
	 *       z: 50,
	 *     },
	 *     let attributes = {
	 *       id: 123,
	 *       name: "测试",
	 *       type: "建筑",
	 *       scale：0.5 ,
	 *       isGraphic: false,
	 *       visible:true
	 *     }
	 *   }
	 *   // 配合 async
	 *   let marker1 = await marker.add(marker)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param marker 
	 * @param sync 
	 * @return  
	 */
	add(marker : any, sync? : any): /* Marker.prototype.+Promise */ any;
		
	/**
	 * @api  remove(id: string, sync?: boolean) 删除标注点
	 * @name remove
	 * @group Marker
	 * @version 1.0.0
	 * @description 删除标注点
	 * 
	 * @param id 要删除的标注点的id
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let marker = new kapi.Marker()
	 *   // 配合 async
	 *   let response = await marker.remove(id)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param id 
	 * @param sync 
	 * @return  
	 */
	remove(id : any, sync? : any): /* Marker.prototype.+Promise */ any;
		
	/**
	 * @api  clear(sync?: boolean) 清空标注点
	 * @name clear
	 * @group Marker
	 * @version 1.0.0
	 * @description 清空标注点
	 * 
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let marker = new kapi.Marker()
	 *   // 配合 async
	 *   let response = await marker.clear()
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param sync 
	 * @return  
	 */
	clear(sync? : any): /* Marker.prototype.+Promise */ any;
		
	/**
	 * @api  updateByAttributes(id: string, attributes: object, sync?: boolean) 按属性更新标注点
	 * @name updateByAttributes
	 * @group Marker
	 * @version 1.0.0
	 * @description 按属性更新标注点
	 * 
	 * @param id 更新的标注点的id，必填字段
	 * @param attributes 更新的标注点的属性，现在支持name和type，必须都要传
	 * @param attributes.name 更新的标注点的name
	 * @param attributes.type 更新的标注点的type
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let marker = new kapi.Marker()
	 *   let attributes = {
	 *     name: "测试123",
	 *     type: "建筑"
	 *   }
	 *   // 配合 async
	 *   let response = await marker.updateByAttributes(attributes)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param id 
	 * @param attributes 
	 * @param sync 
	 * @return  
	 */
	updateByAttributes(id : any, attributes : any, sync? : any): /* Marker.prototype.+Promise */ any;
		
	/**
	 * @api  update(marker: object, sync?: boolean) 更新标注点
	 * @name update
	 * @group Marker
	 * @version 1.0.0
	 * @description 更新标注点
	 * 
	 * @param marker 更新的标注点，包括标注点的所有字段，使用 marker.createMarker(position, attributes) 生成的
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let marker = new kapi.Marker()
	 *   let options = {
	 *     position: {
	 *       x: 510452.4,
	 *       y: 4056732.75,
	 *       z: 50,
	 *     },
	 *     let attributes = {
	 *       id: 123,
	 *       name: "测试123",
	 *       type: "建筑",
	 *       scale:0.5,
	 *       isGraphic: false,
	 *       visible:true
	 *     }
	 *   }
	 *   // 配合 async
	 *   let markerObject = marker.createMarker(position, attributes)
	 *   let response = await marker.update(markerObject)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param marker 
	 * @param sync 
	 * @return  
	 */
	update(marker : Marker, sync? : any): /* Marker.prototype.+Promise */ any;
		
	/**
	 * @api  flyToMarker(marker: string, sync?: boolean) 定位到标注点
	 * @name flyToMarker
	 * @group Marker
	 * @version 1.0.0
	 * @description 定位到标注点
	 * 
	 * @param marker 更新的标注点，包括标注点的所有字段，使用 marker.createMarker(position, attributes) 生成的
	 * 
	 * @example 使用示例
	 *   let marker = new kapi.Marker()
	 *   let options = {
	 *     position: {
	 *       x: 510452.4,
	 *       y: 4056732.75,
	 *       z: 50,
	 *     },
	 *     let attributes = {
	 *       id: 123,
	 *       name: "测试123",
	 *       type: "建筑",
	 *       scale:0.5,
	 *       isGraphic: false,
	 *       visible:true
	 *     }
	 *   }
	 *   let markerObject = marker.createMarker(position, attributes)
	 *   // 配合 async
	 *   let response = await marker.flyToMarker(markerObject)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param marker 
	 * @param sync 
	 * @return  
	 */
	flyToMarker(marker : /* Marker.prototype.+Scene */ any, sync? : any): /* Marker.prototype.+Promise */ any;
		
	/**
	 * @api  show(id: string, sync?: boolean) 显示标注点
	 * @name show
	 * @group Marker
	 * @version 1.0.0
	 * @description 显示标注点
	 * 
	 * @param id 标注点的id
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let marker = new kapi.Marker()
	 *   // 配合 async
	 *   let response = await marker.show(123)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param id 
	 * @param sync 
	 * @return  
	 */
	show(id : any, sync? : any): /* Marker.prototype.+Promise */ any;
		
	/**
	 * @api  showAll(sync?: boolean) 显示全部标注点
	 * @name showAll
	 * @group Marker
	 * @version 1.0.0
	 * @description 显示全部标注点
	 * 
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let marker = new kapi.Marker()
	 *   // 配合 async
	 *   let response = await marker.showAll()
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param sync 
	 * @return  
	 */
	showAll(sync? : any): /* Marker.prototype.+Promise */ any;
		
	/**
	 * @api  hide(id: string, sync?: boolean) 隐藏标注点
	 * @name hide
	 * @group Marker
	 * @version 1.0.0
	 * @description 隐藏标注点
	 * 
	 * @param id 标注点的id
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let marker = new kapi.Marker()
	 *   // 配合 async
	 *   let response = await marker.hide(123)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param id 
	 * @param sync 
	 * @return  
	 */
	hide(id : any, sync? : any): /* Marker.prototype.+Promise */ any;
		
	/**
	 * @api  hideAll(sync?: boolean) 隐藏全部标注点
	 * @name hideAll
	 * @group Marker
	 * @version 1.0.0
	 * @description 隐藏全部标注点
	 * 
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let marker = new kapi.Marker()
	 *   // 配合 async
	 *   let response = await marker.hideAll()
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param sync 
	 * @return  
	 */
	hideAll(sync? : any): /* Marker.prototype.+Promise */ any;
		
	/**
	 * @api  addMarkerFocus(sync?: boolean) 设置标注点点击定位
	 * @name addMarkerFocus
	 * @group Marker
	 * @version 1.0.0
	 * @description 设置标注点定位
	 * 
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let marker = new kapi.Marker()
	 *   // 配合 async
	 *   let response = await marker.addMarkerFocus()
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param sync 
	 * @return  
	 */
	addMarkerFocus(sync? : any): /* Marker.prototype.+Promise */ any;
		
	/**
	 * @api  removeMarkerFocus(sync?: boolean) 设置标注点点击定位关闭
	 * @name removeMarkerFocus
	 * @group Marker
	 * @version 1.0.0
	 * @description 设置标注点定位
	 * 
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   let marker = new kapi.Marker()
	 *   // 配合 async
	 *   let response = await marker.removeMarkerFocus()
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param sync 
	 * @return  
	 */
	removeMarkerFocus(sync? : any): /* Marker.prototype.+Promise */ any;
}
declare var Marker: Marker;

/**
 * 
 */
declare interface Measure {
		
	/**
	 * 
	 */
	new ();
		
	/**
	 * @api  get3DLength(options: object) 获取空间距离
	 * @name get3DLength
	 * @group Measure
	 * @version 1.0.0
	 * @description 获取空间距离
	 * 
	 * @param options 测量相关参数
	 * @param options.color  文本颜色，默认红色 <br> [1] rgb,rgba两种格式，r代表红色，g代表绿色，b代表蓝色，a代表不透明度，例如：[255,0,0]、[255,0,0,1] <br> [2] Hex十六进制，FF表示16进制的不透明度，转换为十进制是255），例如：#FF0000，#FF0000FF
	 * @param options.lineColor 线条颜色，默认绿色 <br> [1] rgb,rgba两种格式，r代表红色，g代表绿色，b代表蓝色，a代表不透明度，例如：[255,0,0]、[255,0,0,1] <br> [2] Hex十六进制，FF表示16进制的不透明度，转换为十进制是255），例如：#FF0000，#FF0000FF
	 * 
	 * @example 使用示例
	 *   let measure = new kapi.Measure()
	 *   let measureInfo = await measure.get3DLength({color: [255, 0, 0, 1], lineColor: [0, 255, 0, 1]})
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param options 
	 * @return  
	 */
	get3DLength(options : any): /* Measure.prototype.+Promise */ any;
		
	/**
	 * @api  get2DLength(options: object) 获取平面距离
	 * @name get2DLength
	 * @group Measure
	 * @version 1.0.0
	 * @description 获取平面距离
	 * 
	 * @param options 测量相关参数
	 * @param options.color  文本颜色，默认红色 <br> [1] rgb,rgba两种格式，r代表红色，g代表绿色，b代表蓝色，a代表不透明度，例如：[255,0,0]、[255,0,0,1] <br> [2] Hex十六进制，FF表示16进制的不透明度，转换为十进制是255），例如：#FF0000，#FF0000FF
	 * @param options.lineColor 线条颜色，默认绿色 <br> [1] rgb,rgba两种格式，r代表红色，g代表绿色，b代表蓝色，a代表不透明度，例如：[255,0,0]、[255,0,0,1] <br> [2] Hex十六进制，FF表示16进制的不透明度，转换为十进制是255），例如：#FF0000，#FF0000FF
	 * 
	 * @example 使用示例
	 *   let measure = new kapi.Measure()
	 *   // 配合 async
	 *   let measureInfo = await measure.get2DLength({color: [255, 0, 0, 1], lineColor: [0, 255, 0, 1]})
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param options 
	 * @return  
	 */
	get2DLength(options : any): /* Measure.prototype.+Promise */ any;
		
	/**
	 * @api  get3DArea(options: object) 获取空间面积
	 * @name get3DArea
	 * @group Measure
	 * @version 1.0.0
	 * @description 获取空间面积
	 * 
	 * @param options 测量相关参数
	 * @param options.color  文本颜色，默认红色 <br> [1] rgb,rgba两种格式，r代表红色，g代表绿色，b代表蓝色，a代表不透明度，例如：[255,0,0]、[255,0,0,1] <br> [2] Hex十六进制，FF表示16进制的不透明度，转换为十进制是255），例如：#FF0000，#FF0000FF
	 * @param options.lineColor 线条颜色，默认绿色 <br> [1] rgb,rgba两种格式，r代表红色，g代表绿色，b代表蓝色，a代表不透明度，例如：[255,0,0]、[255,0,0,1] <br> [2] Hex十六进制，FF表示16进制的不透明度，转换为十进制是255），例如：#FF0000，#FF0000FF
	 * 
	 * @example 使用示例
	 *   let measure = new kapi.Measure()
	 *   let measureInfo = await measure.get3DArea({color: [255, 0, 0, 1], lineColor: [0, 255, 0, 1]})
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param options 
	 * @return  
	 */
	get3DArea(options : any): /* Measure.prototype.+Promise */ any;
		
	/**
	 * @api  get2DArea(options: object) 获取平面面积
	 * @name get2DArea
	 * @group Measure
	 * @version 1.0.0
	 * @description 获取平面面积
	 * 
	 * @param options 测量相关参数
	 * @param options.color  文本颜色，默认红色 <br> [1] rgb,rgba两种格式，r代表红色，g代表绿色，b代表蓝色，a代表不透明度，例如：[255,0,0]、[255,0,0,1] <br> [2] Hex十六进制，FF表示16进制的不透明度，转换为十进制是255），例如：#FF0000，#FF0000FF
	 * @param options.lineColor 线条颜色，默认绿色 <br> [1] rgb,rgba两种格式，r代表红色，g代表绿色，b代表蓝色，a代表不透明度，例如：[255,0,0]、[255,0,0,1] <br> [2] Hex十六进制，FF表示16进制的不透明度，转换为十进制是255），例如：#FF0000，#FF0000FF
	 * 
	 * @example 使用示例
	 *   let measure = new kapi.Measure()
	 *   let measureInfo = await measure.get2DArea({color: [255, 0, 0, 1], lineColor: [0, 255, 0, 1]})
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param options 
	 * @return  
	 */
	get2DArea(options : any): /* Measure.prototype.+Promise */ any;
		
	/**
	 * @api  getHeight(options: object)  获取高度
	 * @name getHeight
	 * @group Measure
	 * @version 1.0.0
	 * @description 获取高度
	 * 
	 * @param options 测量相关参数
	 * @param options.color  文本颜色，默认红色 <br> [1] rgb,rgba两种格式，r代表红色，g代表绿色，b代表蓝色，a代表不透明度，例如：[255,0,0]、[255,0,0,1] <br> [2] Hex十六进制，FF表示16进制的不透明度，转换为十进制是255），例如：#FF0000，#FF0000FF
	 * @param options.lineColor 线条颜色，默认绿色 <br> [1] rgb,rgba两种格式，r代表红色，g代表绿色，b代表蓝色，a代表不透明度，例如：[255,0,0]、[255,0,0,1] <br> [2] Hex十六进制，FF表示16进制的不透明度，转换为十进制是255），例如：#FF0000，#FF0000FF
	 * 
	 * @example 使用示例
	 *   let measure = new kapi.Measure()
	 *   let measureInfo = await measure.getHeight({color: [255, 0, 0, 1], lineColor: [0, 255, 0, 1]})
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param options 
	 * @return  
	 */
	getHeight(options : any): /* Measure.prototype.+Promise */ any;
		
	/**
	 * @api  clear()  清空
	 * @name clear
	 * @group Measure
	 * @version 1.0.0
	 * @description 清空
	 * @example 使用示例
	 *   let measure = new kapi.Measure()
	 *   let measureInfo = await measure.clear()
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @return  
	 */
	clear(): /* Measure.prototype.+Promise */ any;
}
declare var Measure: Measure;

/**
 * 
 */
declare interface Scene {
		
	/**
	 * 
	 * @param id 
	 * @param options 
	 */
	new (id : string, options : /* Scene.defaultOptions */ any);
		
	/**
	 * @api  ready() 等待场景初始化
	 * @name ready
	 * @group Scene
	 * @version 1.0.0
	 * @description 等待场景初始化好
	 * 
	 * @param timeout 连接服务的超时时间，数值类型，单位秒，默认30秒，最小值为5秒，当小于5秒时则设置为5秒
	 * 
	 * @example 使用示例
	 *   // 配合 async
	 *   let readyStat = await scene.ready(15) // 设置超时时间15秒，默认30秒
	 * 
	 * @returns {json}
	 *     {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * 
	 * @return Promise
	 * @param timeout 
	 * @return  
	 */
	ready(timeout : number): /* Scene.prototype.+Promise */ any;
		
	/**
	 * @api  destroy() 销毁场景
	 * @name destroy
	 * @group Scene
	 * @version 1.0.0
	 * @description 销毁场景
	 * 
	 * @example 使用示例
	 *   // 配合 async
	 *   let destroyStat = await scene.destroy()
	 * 
	 * @returns {json}
	 *     {
	 *      code: 200,
	 *      message: "销毁成功",
	 *      data: {}
	 *    }
	 * 
	 * @return Promise
	 * @return  
	 */
	destroy(): /* Scene.prototype.+Promise */ any;
		
	/**
	 * @api  sendData(data) 发送数据
	 * @apiIgnore
	 * @name sendData
	 * @group Scene
	 * @version 1.0.0
	 * @description 发送数据
	 * 
	 * @param data 发送的数据
	 * 
	 * @example
	 *   let kapi = new KAPI.Scene("kapi-container", options)
	 *   let data = {
	 *       event: "setres",
	 *       data: {
	 *           Console: 'r.SetRes 900x600'
	 *       }
	 *   }
	 *   // 配合 async
	 *   let res = await scene.sendData(data)
	 * @return Promise
	 * @param data 
	 * @return  
	 */
	sendData(data : any): /* Scene.prototype.+Promise */ any;
		
	/**
	 * @api  setResolution(width: float, height: float, sync?: boolean) 调整分辨率
	 * @name setResolution
	 * @group Scene
	 * @version 1.0.0
	 * @description 调整分辨率（和服务端等比例缩放，按照最短边为准）
	 * 
	 * @param width 分辨率宽度
	 * @param height 分辨率高度
	 * @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   // 配合 async
	 *   let res = await scene.setResolution(900, 600)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param width 
	 * @param height 
	 * @param sync 
	 * @return  
	 */
	setResolution(width : any, height : any, sync? : any): /* Scene.prototype.+Promise */ any;
		
	/**
	 * @api  getResolution() 获取分辨率
	 * @name getResolution
	 * @group Scene
	 * @version 1.0.0
	 * @description 获取分辨率
	 * 
	 * @example 使用示例
	 *   // 配合 async
	 *   let res = await scene.getResolution()
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {
	 *        domSize: {
	 *          height: "600px",
	 *          width: "900px"
	 *        },
	 *        realSize: {
	 *          height: 540,
	 *          width: 960,
	 *        },
	 *        sourceFrameSize: {
	 *          height: 1080,
	 *          width: 1920
	 *        }
	 *      }
	 *    }
	 * @return Promise
	 * @return  
	 */
	getResolution(): /* Scene.prototype.+Promise */ any;
		
	/**
	 * @api  startEntrance(sync?: boolean) 开始入场动画
	 * @name startEntrance
	 * @group Scene
	 * @version 1.0.0
	 * @description 开始入场动画
	 * 
	 *  @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   // 配合 async
	 *   let res = await scene.startEntrance()
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param sync 
	 * @return  
	 */
	startEntrance(sync? : any): /* Scene.prototype.+Promise */ any;
		
	/**
	 * @api  pauseEntrance(sync?: boolean) 暂停入场动画
	 * @name pauseEntrance
	 * @group Scene
	 * @version 1.0.0
	 * @description 暂停入场动画
	 * 
	 *  @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   // 配合 async
	 *   let res = await scene.pauseEntrance()
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param sync 
	 * @return  
	 */
	pauseEntrance(sync? : any): /* Scene.prototype.+Promise */ any;
		
	/**
	 * @api  stopEntrance(sync?: boolean) 停止入场动画
	 * @name stopEntrance
	 * @group Scene
	 * @version 1.0.0
	 * @description 停止入场动画
	 * 
	 *  @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   // 配合 async
	 *   let res = await scene.stopEntrance()
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param sync 
	 * @return  
	 */
	stopEntrance(sync? : any): /* Scene.prototype.+Promise */ any;
		
	/**
	 * @api  showGrid(sync?: boolean) 显示单元网格
	 * @name showGrid
	 * @group Scene
	 * @version 1.0.0
	 * @description 显示单元网格
	 * 
	 *  @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   // 配合 async
	 *   let res = await scene.showGrid()
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param sync 
	 * @return  
	 */
	showGrid(sync? : any): /* Scene.prototype.+Promise */ any;
		
	/**
	 * @api  hideGrid(sync?: boolean) 隐藏单元网格
	 * @name hideGrid
	 * @group Scene
	 * @version 1.0.0
	 * @description 隐藏单元网格
	 * 
	 *  @param sync [可选]是否要多客户端同步场景，需要开启同步服务器
	 * 
	 * @example 使用示例
	 *   // 配合 async
	 *   let res = await scene.hideGrid()
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param sync 
	 * @return  
	 */
	hideGrid(sync? : any): /* Scene.prototype.+Promise */ any;
		
	/**
	 * @api  mute() 执行静音
	 * @name mute
	 * @group Scene
	 * @version 1.0.0
	 * @description 对场景进行静音
	 * 
	 * @example 使用示例
	 *   // 配合 async
	 *   let res = await scene.mute()
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @return  
	 */
	mute(): /* Scene.prototype.+Promise */ any;
		
	/**
	 * @api  unmute() 取消静音
	 * @name unmute
	 * @group Scene
	 * @version 1.0.0
	 * @description 对场景进行取消静音
	 * 
	 * @example 使用示例
	 *   // 配合 async
	 *   let res = await scene.unmute()
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @return  
	 */
	unmute(): /* Scene.prototype.+Promise */ any;
		
	/**
	 * 初始化参数
	 * @param {string} id                                  【必选】场景DOM的id
	 * @param {object} options                             【必选】传入显示参数、样式参数
	 * @param {string} options.server                      【必选】服务地址
	 * @param {boolean} options.autoStop                   【可选】是否30秒不操作自动断开连接，默认false
	 * @param {boolean} options.entrance                   【可选】是否自动播放入场动画，默认false
	 * @param {boolean} options.netStats                   【可选】是否显示网络状态，默认false
	 * @param {boolean} options.fullscreen                 【可选】是否显示全屏按钮，默认false
	 * @param {boolean} options.leaveTips                  【可选】离开页面（关闭、刷新）是否提示，默认false
	 * @param {boolean} options.audio                      【可选】开启声音，默认 true
	 * @param {boolean} options.turnServer                 【可选】是否使用公网访问
	 * @param {boolean} options.turnServer.enable          【可选】启用公网访问，默认 false
	 * @param {boolean} options.turnServer.urls            【可选】TURN服务器地址，可以是字符串，也可以是数组
	 * @param {boolean} options.turnServer.name            【可选】用户名
	 * @param {boolean} options.turnServer.pass            【可选】密码
	 * @param {boolean} options.sync                       【可选】是否多客户端场景消息同步，默认false
	 * @param {string} options.syncServer                  【可选】消息同步的Server
	 * @param {string} options.syncClientId                【可选】标识客户端的Id，字符类型，默认为客户端的指纹信息
	 * @param {array} options.keyboardIgnoreList           【可选】设置要忽略的按键（忽略的不会将按键指令发送到后台） <br> 默认：["F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "Tab", "`"]
	 * @returns {Promise<void>}
	 * @private
	 * @param id 
	 * @param options 
	 */
	_initSetting(id : string, options : /* Scene.prototype._initSetting1 */ any): void;
		
	/**
	 * 判断是不是要开启调试
	 * @return  
	 */
	_judgeWhiteList(): boolean;
		
	/**
	 * 
	 * @param callback 
	 */
	_reConnect(callback : any): void;
		
	/**
	 * 
	 * @param timeout 
	 * @param callback 
	 */
	_initPs(timeout : number, callback : any): void;
		
	/**
	 * 配置TURN SERVER
	 * @return  
	 */
	_setConfig(): /* Scene.prototype.+Promise */ any;
		
	/**
	 * 设置公网访问
	 * @param options 
	 * @return  
	 */
	_setPublic(options : /* Scene.defaultOptions */ any): boolean;
		
	/**
	 * 
	 * @return  
	 */
	_destroy(): /* Scene.prototype.+Promise */ any;
		
	/**
	 * 
	 */
	_setMouseMoveListener(): void;
		
	/**
	 * 
	 */
	_setOnclose(): void;
		
	/**
	 * 
	 */
	_setOncloseFirefox(): void;
		
	/**
	 * 
	 */
	_setPCStatus(): void;
		
	/**
	 * 
	 * @param loading 
	 * @param callback 
	 */
	_fadeLoading(loading : any, callback : any): void;
		
	/**
	 * 
	 */
	_showOffline(): void;
		
	/**
	 * 
	 * @param offline 
	 */
	_fadeOffline(offline : any): void;
		
	/**
	 * 监听分辨率，并动态调整
	 */
	_updateVideoStreamSize(): void;
		
	/**
	 * 
	 */
	id : string;
	
	/**
	 * 
	 */
	defaultOptions : {
				
		/**
		 * 
		 */
		server : string;
				
		/**
		 * 
		 */
		autoStop : boolean;
				
		/**
		 * 
		 */
		entrance : boolean;
				
		/**
		 * 
		 */
		netStats : boolean;
				
		/**
		 * 
		 */
		fullscreen : boolean;
				
		/**
		 * 
		 */
		leaveTips : boolean;
				
		/**
		 * 
		 */
		audio : boolean;
				
		/**
		 * 
		 */
		audioPermissionTips : boolean;
				
		/**
		 * 
		 */
		turnServer : boolean;
				
		/**
		 * 
		 */
		sync : boolean;
				
		/**
		 * 
		 */
		syncServer : string;
				
		/**
		 * 
		 */
		syncClientId : string;
				
		/**
		 * 
		 */
		keyboardIgnoreList : Array<any>;
				
		/**
		 * 
		 */
		domId : string;
				
		/**
		 * 
		 */
		turnServerError : boolean;
				
		/**
		 * 
		 */
		keyboardEvents : boolean;
	}
		
	/**
	 * 
	 */
	startWaitingTime : number;
	
	/**
	 * 
	 */
	options : {
				
		/**
		 * 
		 */
		domId : string;
				
		/**
		 * 去重
		 */
		keyboardIgnoreList : Array<any>;
				
		/**
		 * 
		 */
		turnServerError : boolean;
				
		/**
		 * 
		 */
		syncServer : string;
				
		/**
		 * 
		 */
		keyboardEvents : boolean;
	}
		
	/**
	 * 将domId挂接到 scene
	 */
	domId : string;
		
	/**
	 * 将server挂接到 scene 上
	 */
	server : string;
		
	/**
	 * 
	 */
	isSetConfig : /* Scene.prototype.+Promise */ any;
		
	/**
	 * 
	 */
	clientId : string;
}
declare var Scene: Scene;

/**
 * 
 */
declare interface Tool {
		
	/**
	 * 
	 */
	new ();
		
	/**
	 * @api  openGetPoint(type) 开启取点工具
	 * @name openGetPoint
	 * @group Tool
	 * @version 1.0.0
	 * @description 开启取点工具
	 * 
	 * @param type 返回坐标类型【 engine  返回引擎坐标; project  返回投影坐标; graphic  返回地理坐标】
	 * 
	 * @example 使用示例
	 *   let tool = new kapi.Tool()
	 *   let type="project"
	 *   // 配合 async
	 *   let tool-openGetPoint = await tool.openGetPoint(type)
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "开启取点工具",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param type 
	 * @return  
	 */
	openGetPoint(type : any): /* Tool.prototype.+Promise */ any;
		
	/**
	 * @api  closeGetPoint(type) 关闭取点工具
	 * @name closeGetPoint
	 * @group Tool
	 * @version 1.0.0
	 * @description 关闭取点工具
	 * 
	 * 
	 * @example 使用示例
	 *   let tool = new kapi.Tool()
	 *   // 配合 async
	 *   let tool-closeGetPoint = await tool.closeGetPoint()
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "关闭取点工具",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @return  
	 */
	closeGetPoint(): /* Tool.prototype.+Promise */ any;
}
declare var Tool: Tool;

/**
 * 
 */
declare interface UI {
		
	/**
	 * 
	 */
	new ();
		
	/**
	 * @api  showNetStatus() 显示网络面板
	 * @name showNetStatus
	 * @group UI
	 * @version 1.0.0
	 * @description 显示网络信息面板，FPS表示帧率，RTT表示网络时延，PER表示掉包率
	 * 
	 * @param time 多久刷新一次网络信息，默认1秒
	 * 
	 * @example 使用示例
	 *   // 配合 async
	 *   let res = await kapi.ui.showNetStatus()
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @param time 
	 * @return  
	 */
	showNetStatus(time : any): /* UI.prototype.+Promise */ any;
		
	/**
	 * @api  hideNetStatus() 隐藏网络面板
	 * @name hideNetStatus
	 * @group UI
	 * @version 1.0.0
	 * @description 隐藏网络信息面板
	 * 
	 * @example 使用示例
	 *   // 配合 async
	 *   let res = await kapi.ui.hideNetStatus()
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @return  
	 */
	hideNetStatus(): /* UI.prototype.+Promise */ any;
		
	/**
	 * @api  showFullscreen() 显示全屏按钮
	 * @name showFullscreen
	 * @group UI
	 * @version 1.0.0
	 * @description 显示全屏按钮
	 * 
	 * @example 使用示例
	 *   // 配合 async
	 *   let res = await kapi.ui.showFullscreen()
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @return  
	 */
	showFullscreen(): /* UI.prototype.+Promise */ any;
		
	/**
	 * @api  hideFullscreen() 隐藏全屏按钮
	 * @name hideFullscreen
	 * @group UI
	 * @version 1.0.0
	 * @description 隐藏全屏按钮
	 * 
	 * @example 使用示例
	 *   // 配合 async
	 *   let res = await kapi.ui.hideFullscreen()
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @return  
	 */
	hideFullscreen(): /* UI.prototype.+Promise */ any;
		
	/**
	 * @api  enterFullscreen() 执行全屏操作
	 * @apiIgnore
	 * @name enterFullscreen
	 * @group UI
	 * @version 1.0.0
	 * @description 执行全屏操作
	 * 
	 * @example 使用示例
	 *   // 配合 async
	 *   let res = await kapi.ui.enterFullscreen()
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @return  
	 */
	enterFullscreen(): /* UI.prototype.+Promise */ any;
		
	/**
	 * @api  exitFullscreen() 退出全屏
	 * @apiIgnore
	 * @name exitFullscreen
	 * @group UI
	 * @version 1.0.0
	 * @description 退出全屏
	 * 
	 * @example 使用示例
	 *   // 配合 async
	 *   let res = await kapi.ui.enterFullscreen()
	 * 
	 * @returns {json}
	 *    {
	 *      code: 200,
	 *      message: "请求成功",
	 *      data: {}
	 *    }
	 * @return Promise
	 * @return  
	 */
	exitFullscreen(): /* UI.prototype.+Promise */ any;
		
	/**
	 * 
	 */
	hideOffline(): void;
}
declare var UI: UI;

/**
 * 
 */

declare interface KAPI {
  /**
   * @api  build(token: string) 初始化运行环境
   * @name build
   * @group KAPI
   * @version 1.0.0
   * @description 初始化运行环境
   *
   * @param token 授权
   *
   * @return Promise 
   */
  build(token : any): /* KAPI.prototype.+Promise */ any;
  /**
   * @api {get} new kapi.Analyze() 初始化分析
   * @name Analyze
   * @group Analyze
   * @version 1.0.0
   * @description 获取analyze对象。
   *
   * @example
   *   let camera = new kapi.Analyze()
   *
   *
   * @returns
   *     Analyze对象
   * @return Analyze
   */
  Analyze(): any;
  /**
   * @api {get} new kapi.Camera() 初始化相机
   * @name Camera
   * @group Camera
   * @version 1.0.0
   * @description 获取camera对象。
   *
   * @example
   *   let camera = new kapi.Camera()
   *
   *
   * @returns
   *     camera对象
   * @return Camera
   */
  Camera(): any;
  /**
   * @api {get} new kapi.Controller() 初始化控件
   * @name Controller
   * @group Controller
   * @version 1.0.0
   * @description 获取Controller对象。
   *
   * @example
   *   let controller = new kapi.Controller()
   *
   *
   * @returns
   *     Controller对象
   * @return Controller
   */
  Controller(): any;
  /**
   * @api {get} new kapi.Coord() 初始化控件
   * @name Coord
   * @group Coord
   * @version 1.0.0
   * @description 获取Coord对象，坐标转换模块仅支持WGS84椭球。
   *
   * @example
   *   let coord = new kapi.Coord()
   *
   *
   * @returns
   *     Coord对象
   * @return Coord
   */
  Coord(): any;
  /**
   * @api {get} new kapi.Data() 初始化控件
   * @name Data
   * @group Data
   * @version 1.0.0
   * @description 获取Data对象，坐标转换模块仅支持WGS84椭球。
   *
   * @example
   *   let data = new kapi.Data()
   *
   *
   * @returns
   *     Data对象
   * @return Data
   */
  Data(): any;
  /**
   * @api {get} new kapi.Draw() 初始化绘制
   * @name Draw
   * @group Draw
   * @version 1.0.0
   * @description 获取draw对象。
   *
   * @example
   *   let camera = new kapi.Draw()
   *
   *
   * @returns
   *     draw对象
   * @return Draw
   */
  Draw(): any;
  /**
   * @api {get} new kapi.Event() 初始化监听
   * @name Event
   * @group Event
   * @version 1.0.0
   *
   *
   * @example
   *   let event = new kapi.Event()
   *
   * @returns
   *     Event对象
   * @return Event
   */
  Event(): any;
  /**
   * @api {get} new kapi.Iot() 初始化物联网
   * @name Iot
   * @group Iot
   * @version 1.0.0
   * @description 物联网数据控制。
   *
   * @example
   *   let iot = new kapi.Iot()
   *
   *
   * @returns
   *     Iot对象
   * @return Iot
   */
  Iot(): any;
  /**
   * @api {get} new kapi.Layer() 初始化图层
   * @name Layer
   * @group Layer
   * @version 1.0.0
   * @description 图层。
   *
   * @example
   *   let layer = new kapi.Layer()
   *
   *
   * @returns
   *     Layer对象
   * @return Layer
   */
  Layer(): any;
  /**
   * @api {get} new kapi.Marker() 初始化标注点
   * @name Marker
   * @group Marker
   * @version 1.0.0
   * @description 获取Marker对象。
   *
   * @example
   *   let Marker = new kapi.Marker()
   *
   *
   * @returns
   *     Marker对象
   * @return Marker
   */
  Marker(): any;
  /**
   * @api {get} new kapi.Measure() 初始化控件
   * @name Measure
   * @group Measure
   * @version 1.0.0
   * @description 获取Measure对象。
   *
   * @example
   *   let measure = new kapi.Measure()
   *
   *
   * @returns
   *     Measure对象
   * @return Measure
   */
  Measure(): any;
  /**
   *  @api {get} new kapi.Scene(id: string, options: object) 初始化场景
   * @name Scene
   * @group Scene
   * @version 1.0.0
   * @description 通过传入id和options创建scene对象。
   * 
   * @param {string} id                                  【必选】场景DOM的id
   * @param {object} options                             【必选】传入显示参数、样式参数
   * @param {string} options.server                      【必选】服务地址
   * @param {boolean} options.autoStop                   【可选】是否30秒不操作自动断开连接，默认false
   * @param {boolean} options.entrance                   【可选】是否自动播放入场动画，默认false
   * @param {boolean} options.netStats                   【可选】是否显示网络状态，默认false
   * @param {boolean} options.fullscreen                 【可选】是否显示全屏按钮，默认false
   * @param {boolean} options.leaveTips                  【可选】离开页面（关闭、刷新）是否提示，默认false
   * @param {boolean} options.audio                      【可选】开启声音，默认 true
   * @param {boolean} options.audioPermissionTips        【可选】当无声音播放的权限时，是否要弹窗提示
   * @param {boolean} options.turnServer                 【可选】是否使用公网访问
   * @param {boolean} options.turnServer.enable          【可选】启用公网访问，默认 false
   * @param {boolean} options.turnServer.urls            【可选】TURN服务器地址，可以是字符串，也可以是数组
   * @param {boolean} options.turnServer.name            【可选】用户名
   * @param {boolean} options.turnServer.pass            【可选】密码
   * @param {boolean} options.sync                       【可选】是否多客户端场景消息同步，默认false
   * @param {string} options.syncServer                  【可选】消息同步的Server
   * @param {string} options.syncClientId                【可选】标识客户端的Id，字符类型，默认为客户端的指纹信息
   * @param {array} options.keyboardIgnoreList           【可选】设置要忽略的按键（忽略的不会将按键指令发送到后台）  默认：["F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "Tab", "`"]
   *
   * @example
   *   // 1.html 中定义一个dom，比如div，id为kapi-container
   *   <div id="kapi-container"></div>
   *   // 2.js 中
   *   // 初始化接口， 配合 async
   *   let kapi = await KAPI.build("Your Auth Token")
   *
   *   // 3.配置参数
   *   let options = {
   *     server: '127.0.0.1:8080',                                   // 场景服务器地址
   *   }
   *
   *   // 4. 初始化场景【下一步调用scene.ready()等待场景初始化好】
   *   let scene = new kapi.Scene("kapi-container", options) // kapi-container是div的id
   *   let ready = await scene.ready()
   *
   * @returns
   *     Scene对象
   * @return Scene
   *   
   */
  Scene(id, options): any;
  /**
   * @api {get} new kapi.Tool() 初始化工具
   * @name Tool
   * @group Tool
   * @version 1.0.0
   * @description 获取Instrument对象。
   *
   * @example
   *   let tool = new kapi.Tool()
   *
   *
   * @returns
   *     Tool对象
   * @return Tool
   */
  Tool(): any;
  /**
   * @api {get} kapi.ui 初始化UI
   * @name UI
   * @group UI
   * @version 1.0.0
   * @description 初始化UI
   *
   * @example
   *   // 显示网络状态 
   *   kapi.ui.showNetStatus()
   *
   *
   * @returns
   *     Tool对象
   * @return Tool
   */
  ui: any;
}
/**
 * KAPI接口入口
 */
declare var KAPI: KAPI;

declare interface KAPI_CONST {
  EVENT: {
  /**
   * 帧率
   */
  FPS: 'fps',
  // 绘制的监听
  DRAW: {
    /**
     * 设置光流的生成监听
     */
    LIGHT_FLOW: 'drawLightflow',
    /**
     * 获取点
     */
    GET_POINT: 'getPoint'
    /**
     * 绘制点
     */
    CREATE_POINT: 'drawPoint',
    /**
     * 销毁点
     */
    DESTROY_POINT: 'destroyPoint'
  },
  // 标注的监听
  MARKER: {
    /**
     * marker点击事件监听
     */
    CLICK: 'marker_click'
  },
  // 漫游监听
  ROUTE: {
    /**
     * 开始漫游
     */
    START: 'route-start',
    /**
     * 漫游中
     */
    MOVING: 'route-moving',
    /**
     * 结束漫游
     */
    END: 'route-end'
    }
  },
  MEASURE: {
    AREA_2D: 'controller_2darea', // 测量监听字段
    AREA_3D: 'controller_area', // 测量监听字段
    HEIGHT: 'controller_height', // 测量监听字段
    LENGTH_2D: 'controller_2dlength', // 测量监听字段
    LENGTH_3D: 'controller_length' // 测量监听字段
  },
  POINT_TYPE: {
    FIRE_01: 'Fire_01:',
    FIRE_02: 'Fire_02:',
    FIRE_03: 'Fire_03:',
    TREE_01: 'Tree_01:',
    TREE_02: 'Tree_02:',
    TREE_03: 'Tree_03:',
    DECAL_01: 'Decal_01',
    DECAL_02: 'Decal_02',
    DECAL_03: 'Decal_03',
    FBX: 'Fbx'
  },
  WEATHER: {
    CLEAR_SKIES: 0,
    PARTLY_CLOUDY: 1,
    CLOUDY: 2,
    OVERCAST: 3,
    FOGGY: 4,
    LIGHT_RAIN: 5,
    RAIN: 6,
    THUNDERSTORM: 7,
    SAND_DUST: 8,
    SANDSTORM: 9,
    LIGHT_SNOW: 10,
    SNOW: 11,
    BLIZZARD: 12
  }
}
/**
 * KAPI系统常量
 */
declare const KAPI_CONST: KAPI_CONST;