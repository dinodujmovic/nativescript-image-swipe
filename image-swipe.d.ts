/*! *****************************************************************************
Copyright (c) 2019 Tangra Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
***************************************************************************** */
import { EventData } from "data/observable";
import { CoercibleProperty, Property } from "ui/core/view";
import { ItemsSource } from "ui/list-picker";
import { ScrollView } from "ui/scroll-view";
import { Cache } from "ui/image-cache";

export interface ImageAccessor {
    loadImage(imageUrl: string, callback: (image: any) => void): void;
    getImage(imageUrl: string): any;
}

export class ImageSwipeBase {
    public static _imageCache: Cache;
}

export class ImageSwipe extends ScrollView {
    public static pageChangedEvent: string;

    public items: any[] | ItemsSource;
    public imageUrlProperty: string;
    public pageNumber: number;
    public allowZoom: boolean;
    public showActivityIndicator: boolean;

    public ios: any; /* UIScrollView */
    public android: any; /* android.support.v4.view.ViewPager */

    public nextPage(): void;
    public prevPage(): void;
}

export interface PageChangeEventData extends EventData {
    eventName: string;
    object: ImageSwipe;
    page: number;
}

export const allowZoomProperty: Property<ImageSwipe, boolean>;
export const pageNumberProperty: CoercibleProperty<ImageSwipe, number>;
export const itemsProperty: Property<ImageSwipe, any[] | ItemsSource>;
export const imageUrlPropertyProperty: Property<ImageSwipe, string>;
export const loadImageProperty: Property<ImageSwipe, ImageAccessor>;
export const showActivityIndiciator: Property<ImageSwipe, boolean>;
