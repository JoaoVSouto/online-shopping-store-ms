import { Injectable } from '@nestjs/common';

import { PrismaService } from '../database/prisma/prisma.service';

type CreatePurchaseParams = {
  customerId: string;
  productId: string;
};

@Injectable()
export class PurchasesService {
  constructor(private prisma: PrismaService) {}

  listAllPurchases() {
    return this.prisma.purchase.findMany({ orderBy: { createdAt: 'desc' } });
  }

  async createPurchase({ customerId, productId }: CreatePurchaseParams) {
    const product = await this.prisma.product.findUnique({
      where: { id: productId },
    });

    if (!product) {
      throw new Error('Product not found');
    }

    return this.prisma.purchase.create({ data: { customerId, productId } });
  }
}
