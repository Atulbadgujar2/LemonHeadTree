export class ListDataFilterModel {
    public ID?: string;
    public Deleted = false;

    public PickerFromDate?: Date;
    public PickerToDate?: Date;

    public FromDateLabelString?: string;
    public ToDateLabelString?: string;

    public FromDate: any;
    public ToDate: any;
}
