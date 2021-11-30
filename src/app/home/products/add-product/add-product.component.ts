import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITEM_TYPES, COMPANYID, IMAGE_CROP_SIZE } from 'src/app/utils/constants';
import { environment } from 'src/environments/environment';
import { item, Item } from 'src/models/item.model';
import { User } from 'src/models/user.model';
import { AccountService } from 'src/services/account.service';
import { ItemService } from 'src/services/item.service';
import { UploadService } from 'src/services/upload.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {


  item: Item;
  message: string;
  itemId: string;
  user: User;
  heading: string;
  editorStyle = {
    marginBottom: '30px',
    height: '400px',
    background: '#fff',
  }
  editorConfig = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'color': [] }, { 'background': [] }],
      [{ 'font': [] }],
      ['blockquote', 'code-block'],

      ['clean'],
      ['link', 'video', 'image'],
      // ['formula']

    ]
  };
  parsedHtml: Document;
  index: number;
  promotions: Item[];
  constructor(
    private itemService: ItemService,
    private activatedRoute: ActivatedRoute,
    private accountService: AccountService,
    private uploadService: UploadService,
    private router: Router,
  ) {

    this.activatedRoute.params.subscribe(r => {
      this.itemId = r.id;
      this.user = accountService.currentUserValue;
      if (this.itemId === 'add') {
        this.heading = `Adding a blog`

        this.item = {
          ItemId: '',
          RelatedId: '',
          RelatedParentId: '',
          Name: '',
          ParentId: '',
          ItemType: ITEM_TYPES.PRODUCT.Name,
          CompanyId: COMPANYID,
          Description: '',
          OrderingNo: 1,
          Price: undefined,
          Quantity: 0,
          ItemStatus: 'Published',
          ItemCode: '',
          ImageUrl: '',
          ImageUrl2: '',
          ImageUrl3: '',
          ItemPin: '',
          ItemCategory: '',
          ItemSubCategory: '',
          CreateUserId: '',
          ModifyUserId: '',
          StatusId: 1
        }
        this.getPromotions();

      } else {
        this.getItem();
      }

    });

  }

  ngOnInit() {


  }
  back() {
    this.router.navigate(['/products'])
  }
  getItem() {
    this.itemService.getItem(this.itemId).subscribe(data => {
      if (data && data.ItemId) {
        this.item = data;
        this.getPromotions();
        this.heading = data.Name
      }

    });
  }

  getPromotions() {
    this.itemService.getItems(COMPANYID, ITEM_TYPES.PROMOTION.Name).subscribe(data => {
      this.promotions = data || [];
      this.promotions = this.promotions.filter(x => x.ItemStatus === 'Active');
      this.calculateSalePrice();

    });
  }
  save() {
    if (this.item.CreateDate) {
      this.itemService.update(this.item).subscribe(data => {
        if (data && data.ItemId) {
          this.message = 'Item updated successfully.';
          this.itemService.getProductItems();

        }
      })
    } else {
      this.itemService.add(this.item).subscribe(data => {
        if (data && data.ItemId) {
          this.message = 'Item created successfully.';
          this.itemService.getProductItems();

        }
      })
    }

  }

  onImageChangedEvent(url) {
    if (this.item) {
      this.item.ImageUrl = url;
    }
  }

  onImageChangedEvent2(url) {
    if (this.item) {
      this.item.ImageUrl2 = url;
    }
  }


  onImageChangedEvent3(url) {
    if (this.item) {
      this.item.ImageUrl3 = url;
    }
  }


  formatBody(index) {
    if (index == 0) {
      let parser = new DOMParser();
      this.parsedHtml = parser.parseFromString(this.item.Description, 'text/html');
      this.index = 0;
    }


    if (this.parsedHtml.images.length && index < this.parsedHtml.images.length) {
      this.convertImageToUrl(this.parsedHtml.images[index].src);
    } else {
      const body = this.parsedHtml.documentElement.innerHTML
      this.item.Description = body;
      this.save();
    }

  }

  convertImageToUrl(img: string) {
    if (img.includes("data:")) {
      this.resizedataURL(img);
    } else {
      // convert next image
      this.index++;
      this.formatBody(this.index);
    }
  }
  resizedataURL(datas) {
    const image = document.createElement('img');
    image.onload = (readerEvent: any) => {
      const canvas = document.createElement('canvas');
      const maxSize = IMAGE_CROP_SIZE;
      let width = image.width;
      let height = image.height;
      if (width > height) {
        if (width > maxSize) {
          height *= maxSize / width;
          width = maxSize;
        }
      } else {
        if (height > maxSize) {
          width *= maxSize / height;
          height = maxSize;
        }
      }
      canvas.width = width;
      canvas.height = height;
      canvas.getContext('2d').drawImage(image, 0, 0, width, height);

      var dataURI = canvas.toDataURL();
      console.log(dataURI);

      const resizedImage = this.dataURLToBlob(dataURI);
      let extention = 'iio.jpg';

      let fileOfBlob = new File([resizedImage], extention);
      // upload
      let formData = new FormData();
      formData.append('file', fileOfBlob);
      formData.append('name', 'iio');
      this.uploadService.uploadFile(formData).subscribe(response => {
        // this.loading = false;

        if (response && response.length > 15) {
          debugger
          this.parsedHtml.images[this.index].src = `${environment.API_URL}/api/upload/${response}`;
          this.parsedHtml.images[this.index].setAttribute("width", "80%");
          this.index++;
          setTimeout(() => {
            this.formatBody(this.index);
          }, 3000)
        }
      });

      /////////////////////////////////////////
      // Use and treat your Data URI here !! //
      /////////////////////////////////////////
    };

    // We put the Data URI in the image's src attribute
    image.src = datas;
  }


  dataURLToBlob(dataURL) {
    const BASE64_MARKER = ';base64,';
    if (dataURL.indexOf(BASE64_MARKER) === -1) {
      // tslint:disable-next-line: no-shadowed-variable
      const parts = dataURL.split(',');
      // tslint:disable-next-line: no-shadowed-variable
      const contentType = parts[0].split(':')[1];
      // tslint:disable-next-line: no-shadowed-variable
      const raw = parts[1];

      return new Blob([raw], { type: contentType });
    }

    const parts = dataURL.split(BASE64_MARKER);
    const contentType = parts[0].split(':')[1];
    const raw = window.atob(parts[1]);
    const rawLength = raw.length;

    const uInt8Array = new Uint8Array(rawLength);

    for (let i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i);
    }

    return new Blob([uInt8Array], { type: contentType });
  }

  calculateSalePrice() {
    const sale: Item = this.promotions.find(x => x.ItemId === this.item.RelatedId);
    if (this.item.RelatedId && this.item.Price && sale) {
      this.item.SalePrice = Number(this.item.Price) - (Number(this.item.Price)) * (Number(sale.Price) / 100)
    }
  }
}
