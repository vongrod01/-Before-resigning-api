/*
###############################################################################
#                                                                             #
#    Generate By Genarate Model : Ver 1.0.0 (Developed by Adisorn Vongrod)    #
#                                                                             #
###############################################################################
*/
const BaseClass = require('./BaseClass')

class PartVO extends BaseClass.BaseVO {
    constructor() {
        super()
        this._RxNo = ''
        this._PartNo = ''
        this._PartName = ''
        this._Model = ''
        this._Production = ''
        this._SectionCode = ''
        this._InspectedQTY = 0
        this._Detail = ''
        this._Detail2 = ''
        this._Active = ''
        this._AddDate = new Date()
        this._UpdateDate = new Date()
        this._AddBy = ''
        this._UpdateBy = ''
    }

    get RxNo() {
        return this._RxNo;
    }
    set RxNo(value) {
        this._RxNo = value
    }

    get PartNo() {
        return this._PartNo;
    }
    set PartNo(value) {
        this._PartNo = value
    }

    get PartName() {
        return this._PartName;
    }
    set PartName(value) {
        this._PartName = value
    }

    get Model() {
        return this._Model;
    }
    set Model(value) {
        this._Model = value
    }

    get Production() {
        return this._Production;
    }
    set Production(value) {
        this._Production = value
    }

    get SectionCode() {
        return this._SectionCode;
    }
    set SectionCode(value) {
        this._SectionCode = value
    }

    get InspectedQTY() {
        return this._InspectedQTY;
    }
    set InspectedQTY(value) {
        this._InspectedQTY = value
    }

    get Detail() {
        return this._Detail;
    }
    set Detail(value) {
        this._Detail = value
    }

    get Detail2() {
        return this._Detail2;
    }
    set Detail2(value) {
        this._Detail2 = value
    }

    get Active() {
        return this._Active;
    }
    set Active(value) {
        this._Active = value
    }

    get AddDate() {
        return this._AddDate;
    }
    set AddDate(value) {
        this._AddDate = value
    }

    get UpdateDate() {
        return this._UpdateDate;
    }
    set UpdateDate(value) {
        this._UpdateDate = value
    }

    get AddBy() {
        return this._AddBy;
    }
    set AddBy(value) {
        this._AddBy = value
    }

    get UpdateBy() {
        return this._UpdateBy;
    }
    set UpdateBy(value) {
        this._UpdateBy = value
    }

}


class PartEXE extends BaseClass.BaseEXE {
    constructor(connDetail) {
        super(connDetail)
        this.result = new PartVO()
    }

    async get(RxNo) {
        try {

            await this.callSp('part_get', [RxNo])
            if (this.dataSet.length > 0) {
                this.result.jsonAssignToAttr(this.dataSet[0])
                return this.result
            }
            else {
                return null
            }
        } catch (error) {
            this.logErrorExec('****** Error part_get : ' + error + '******')
            this.dataSet = []
            return null
        }
    }

    async add(DataVO) {
        try {
            let params = [
                DataVO.RxNo,
                DataVO.PartNo,
                DataVO.PartName,
                DataVO.Model,
                DataVO.Production,
                DataVO.SectionCode,
                DataVO.InspectedQTY,
                DataVO.Detail,
                DataVO.Detail2,
                DataVO.Active,
                DataVO.AddDate,
                DataVO.UpdateDate,
                DataVO.AddBy,
                DataVO.UpdateBy,

            ]
            await this.callSp('part_add', params)
            let RxNo = this.paramsOut.Param1
            return this.get(RxNo)

        } catch (error) {
            this.logErrorExec('****** Error part_add : ' + error + '******')
            this.dataSet = []
            return null
        }
    }

    async edit(DataVO) {
        try {
            let params = [
                DataVO.RxNo,
                DataVO.PartNo,
                DataVO.PartName,
                DataVO.Model,
                DataVO.Production,
                DataVO.SectionCode,
                DataVO.InspectedQTY,
                DataVO.Detail,
                DataVO.Detail2,
                DataVO.Active,
                DataVO.AddDate,
                DataVO.UpdateDate,
                DataVO.AddBy,
                DataVO.UpdateBy,

            ]
            await this.callSp('part_edit', params)
            let RxNo = this.paramsOut.Param1
            return this.get(RxNo)

        } catch (error) {
            this.logErrorExec('****** Error part_edit : ' + error + '******')
            this.dataSet = []
            return null
        }
    }

    async delete(RxNo) {
        try {
            await this.callSp('part_delete', [RxNo])
            return true

        } catch (error) {
            this.logErrorExec('****** Error part_delete : ' + error + '******')
            return false
        }
    }

    async search(DataVO) {
        try {
            let params = [
                //   DataVO.RxNo,
                DataVO.PartNo,
                DataVO.PartName,
                DataVO.Model,
                DataVO.Production,
                DataVO.SectionCode,
                //   DataVO.InspectedQTY,
                DataVO.Detail,
                DataVO.Detail2,
                DataVO.Active,
                //   DataVO.AddDate,
                //   DataVO.UpdateDate,
                DataVO.AddBy,
                DataVO.UpdateBy,

            ]
            await this.callSp('part_search', params)
        } catch (error) {
            this.logErrorExec('****** Error part_search : ' + error + '******')
            this.dataSet = []

        }
        return this.dataSet
    }


}

module.exports.PartVO = PartVO
module.exports.PartEXE = PartEXE
